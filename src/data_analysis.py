"""
Data Analysis for Financial Fraud Detection
Analyze transaction patterns and create visualizations
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def analyze_transactions(data):
    """Analyze transaction patterns"""
    print("📊 Transaction Analysis Report")
    print("=" * 40)
    
    # Basic statistics
    print(f"Total transactions: {len(data):,}")
    print(f"Fraudulent transactions: {data['fraud'].sum():,}")
    print(f"Fraud rate: {data['fraud'].mean():.2%}")
    
    # Amount analysis
    print(f"\n💰 Amount Statistics:")
    print(f"Average amount: ${data['amount'].mean():.2f}")
    print(f"Median amount: ${data['amount'].median():.2f}")
    print(f"Max amount: ${data['amount'].max():.2f}")
    
    # Fraud patterns
    fraud_data = data[data['fraud'] == 1]
    legit_data = data[data['fraud'] == 0]
    
    print(f"\n🚨 Fraud Patterns:")
    print(f"Average fraud amount: ${fraud_data['amount'].mean():.2f}")
    print(f"Average legitimate amount: ${legit_data['amount'].mean():.2f}")
    
    return data

def create_visualizations(data):
    """Create fraud detection visualizations"""
    fig, axes = plt.subplots(2, 2, figsize=(15, 10))
    fig.suptitle('💳 Financial Fraud Detection Analysis', fontsize=16)
    
    # 1. Amount distribution
    axes[0, 0].hist(data[data['fraud']==0]['amount'], alpha=0.7, label='Legitimate', bins=30)
    axes[0, 0].hist(data[data['fraud']==1]['amount'], alpha=0.7, label='Fraudulent', bins=30)
    axes[0, 0].set_title('Transaction Amounts')
    axes[0, 0].set_xlabel('Amount ($)')
    axes[0, 0].legend()
    
    # 2. Hour distribution
    hour_fraud = data.groupby(['hour', 'fraud']).size().unstack(fill_value=0)
    hour_fraud.plot(kind='bar', ax=axes[0, 1])
    axes[0, 1].set_title('Transactions by Hour')
    axes[0, 1].set_xlabel('Hour')
    
    # 3. Distance analysis
    axes[1, 0].boxplot([data[data['fraud']==0]['distance'], data[data['fraud']==1]['distance']])
    axes[1, 0].set_title('Distance from Home')
    axes[1, 0].set_xticklabels(['Legitimate', 'Fraudulent'])
    
    # 4. Online vs Offline
    online_fraud = data.groupby(['online', 'fraud']).size().unstack(fill_value=0)
    online_fraud.plot(kind='bar', ax=axes[1, 1])
    axes[1, 1].set_title('Online vs Offline')
    axes[1, 1].set_xlabel('Online Transaction')
    
    plt.tight_layout()
    plt.savefig('reports/fraud_analysis.png', dpi=300, bbox_inches='tight')
    plt.show()
    
    print("📈 Visualizations saved to reports/fraud_analysis.png")

if __name__ == "__main__":
    # Import the fraud detection model
    import sys
    sys.path.append('..')
    from src.fraud_detection import FraudDetector
    
    # Generate and analyze data
    detector = FraudDetector()
    data = detector.generate_data(5000)
    
    # Analyze data
    analyze_transactions(data)
    
    # Create visualizations
    create_visualizations(data)
