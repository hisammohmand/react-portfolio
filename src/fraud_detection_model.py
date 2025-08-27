"""
Financial Fraud Detection Model
Main module for fraud detection using machine learning
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score
from sklearn.preprocessing import StandardScaler
import joblib
import warnings
warnings.filterwarnings('ignore')

class FraudDetectionModel:
    """
    A machine learning model for detecting fraudulent financial transactions
    """
    
    def __init__(self):
        self.rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.gb_model = GradientBoostingClassifier(n_estimators=100, random_state=42)
        self.scaler = StandardScaler()
        self.feature_names = None
        self.is_trained = False
        
    def generate_sample_data(self, n_samples=10000):
        """
        Generate synthetic transaction data for demonstration
        """
        np.random.seed(42)
        
        # Generate legitimate transactions
        legitimate_transactions = {
            'amount': np.random.normal(100, 50, int(n_samples * 0.95)),
            'hour': np.random.randint(0, 24, int(n_samples * 0.95)),
            'day_of_week': np.random.randint(0, 7, int(n_samples * 0.95)),
            'distance_from_home': np.random.normal(10, 5, int(n_samples * 0.95)),
            'distance_from_last_transaction': np.random.normal(5, 3, int(n_samples * 0.95)),
            'ratio_to_median_purchase_price': np.random.normal(1, 0.3, int(n_samples * 0.95)),
            'repeat_retailer': np.random.choice([0, 1], int(n_samples * 0.95), p=[0.7, 0.3]),
            'used_chip': np.random.choice([0, 1], int(n_samples * 0.95), p=[0.3, 0.7]),
            'used_pin_number': np.random.choice([0, 1], int(n_samples * 0.95), p=[0.8, 0.2]),
            'online_order': np.random.choice([0, 1], int(n_samples * 0.95), p=[0.6, 0.4])
        }
        
        # Generate fraudulent transactions (with different patterns)
        fraudulent_transactions = {
            'amount': np.random.normal(500, 200, int(n_samples * 0.05)),
            'hour': np.random.choice([2, 3, 4, 22, 23], int(n_samples * 0.05)),
            'day_of_week': np.random.choice([5, 6], int(n_samples * 0.05)),
            'distance_from_home': np.random.normal(50, 20, int(n_samples * 0.05)),
            'distance_from_last_transaction': np.random.normal(100, 30, int(n_samples * 0.05)),
            'ratio_to_median_purchase_price': np.random.normal(3, 1, int(n_samples * 0.05)),
            'repeat_retailer': np.random.choice([0, 1], int(n_samples * 0.05), p=[0.9, 0.1]),
            'used_chip': np.random.choice([0, 1], int(n_samples * 0.05), p=[0.8, 0.2]),
            'used_pin_number': np.random.choice([0, 1], int(n_samples * 0.05), p=[0.9, 0.1]),
            'online_order': np.random.choice([0, 1], int(n_samples * 0.05), p=[0.8, 0.2])
        }
        
        # Combine data
        legitimate_df = pd.DataFrame(legitimate_transactions)
        fraudulent_df = pd.DataFrame(fraudulent_transactions)
        
        # Add labels
        legitimate_df['fraud'] = 0
        fraudulent_df['fraud'] = 1
        
        # Combine and shuffle
        data = pd.concat([legitimate_df, fraudulent_df], ignore_index=True)
        data = data.sample(frac=1, random_state=42).reset_index(drop=True)
        
        return data
    
    def preprocess_data(self, data):
        """
        Preprocess the transaction data
        """
        # Create additional features
        data['amount_log'] = np.log1p(data['amount'])
        data['hour_sin'] = np.sin(2 * np.pi * data['hour'] / 24)
        data['hour_cos'] = np.cos(2 * np.pi * data['hour'] / 24)
        data['day_sin'] = np.sin(2 * np.pi * data['day_of_week'] / 7)
        data['day_cos'] = np.cos(2 * np.pi * data['day_of_week'] / 7)
        
        # Select features for modeling
        feature_columns = [
            'amount_log', 'hour_sin', 'hour_cos', 'day_sin', 'day_cos',
            'distance_from_home', 'distance_from_last_transaction',
            'ratio_to_median_purchase_price', 'repeat_retailer',
            'used_chip', 'used_pin_number', 'online_order'
        ]
        
        self.feature_names = feature_columns
        
        X = data[feature_columns]
        y = data['fraud']
        
        return X, y
    
    def train_model(self, X, y):
        """
        Train the fraud detection model
        """
        # Split the data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Scale features
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        # Train Random Forest
        print("Training Random Forest model...")
        self.rf_model.fit(X_train_scaled, y_train)
        
        # Train Gradient Boosting
        print("Training Gradient Boosting model...")
        self.gb_model.fit(X_train_scaled, y_train)
        
        # Evaluate models
        rf_score = self.rf_model.score(X_test_scaled, y_test)
        gb_score = self.gb_model.score(X_test_scaled, y_test)
        
        print(f"Random Forest Accuracy: {rf_score:.4f}")
        print(f"Gradient Boosting Accuracy: {gb_score:.4f}")
        
        # Use the better model
        if rf_score > gb_score:
            self.best_model = self.rf_model
            print("Random Forest selected as best model")
        else:
            self.best_model = self.gb_model
            print("Gradient Boosting selected as best model")
        
        self.is_trained = True
        
        return X_test_scaled, y_test
    
    def predict_fraud(self, transaction_data):
        """
        Predict if a transaction is fraudulent
        """
        if not self.is_trained:
            raise ValueError("Model must be trained before making predictions")
        
        # Preprocess the transaction data
        transaction_data['amount_log'] = np.log1p(transaction_data['amount'])
        transaction_data['hour_sin'] = np.sin(2 * np.pi * transaction_data['hour'] / 24)
        transaction_data['hour_cos'] = np.cos(2 * np.pi * transaction_data['hour'] / 24)
        transaction_data['day_sin'] = np.sin(2 * np.pi * transaction_data['day_of_week'] / 7)
        transaction_data['day_cos'] = np.cos(2 * np.pi * transaction_data['day_of_week'] / 7)
        
        # Select features
        X = transaction_data[self.feature_names]
        
        # Scale features
        X_scaled = self.scaler.transform(X)
        
        # Make prediction
        prediction = self.best_model.predict(X_scaled)
        probability = self.best_model.predict_proba(X_scaled)[:, 1]
        
        return prediction, probability
    
    def get_feature_importance(self):
        """
        Get feature importance from the trained model
        """
        if not self.is_trained:
            raise ValueError("Model must be trained before getting feature importance")
        
        importance = self.best_model.feature_importances_
        feature_importance_df = pd.DataFrame({
            'feature': self.feature_names,
            'importance': importance
        }).sort_values('importance', ascending=False)
        
        return feature_importance_df
    
    def save_model(self, filepath):
        """
        Save the trained model
        """
        if not self.is_trained:
            raise ValueError("Model must be trained before saving")
        
        model_data = {
            'best_model': self.best_model,
            'scaler': self.scaler,
            'feature_names': self.feature_names
        }
        
        joblib.dump(model_data, filepath)
        print(f"Model saved to {filepath}")
    
    def load_model(self, filepath):
        """
        Load a trained model
        """
        model_data = joblib.load(filepath)
        self.best_model = model_data['best_model']
        self.scaler = model_data['scaler']
        self.feature_names = model_data['feature_names']
        self.is_trained = True
        print(f"Model loaded from {filepath}")

def main():
    """
    Main function to demonstrate the fraud detection model
    """
    print("🔄 Initializing Fraud Detection Model...")
    
    # Initialize model
    fraud_model = FraudDetectionModel()
    
    # Generate sample data
    print("📊 Generating sample transaction data...")
    data = fraud_model.generate_sample_data(n_samples=10000)
    
    print(f"Dataset shape: {data.shape}")
    print(f"Fraud rate: {data['fraud'].mean():.2%}")
    
    # Preprocess data
    print("🔧 Preprocessing data...")
    X, y = fraud_model.preprocess_data(data)
    
    # Train model
    print("🤖 Training fraud detection model...")
    X_test, y_test = fraud_model.train_model(X, y)
    
    # Get feature importance
    print("📈 Analyzing feature importance...")
    feature_importance = fraud_model.get_feature_importance()
    print("\nTop 5 Most Important Features:")
    print(feature_importance.head())
    
    # Save model
    print("💾 Saving trained model...")
    fraud_model.save_model('models/fraud_detection_model.pkl')
    
    # Demonstrate prediction
    print("\n🔍 Testing fraud detection...")
    sample_transaction = pd.DataFrame([{
        'amount': 500,
        'hour': 3,
        'day_of_week': 6,
        'distance_from_home': 50,
        'distance_from_last_transaction': 100,
        'ratio_to_median_purchase_price': 3.5,
        'repeat_retailer': 0,
        'used_chip': 0,
        'used_pin_number': 0,
        'online_order': 1
    }])
    
    prediction, probability = fraud_model.predict_fraud(sample_transaction)
    
    print(f"Sample Transaction Prediction: {'FRAUD' if prediction[0] == 1 else 'LEGITIMATE'}")
    print(f"Fraud Probability: {probability[0]:.2%}")
    
    print("\n✅ Fraud Detection Model Demo Complete!")

if __name__ == "__main__":
    main()
