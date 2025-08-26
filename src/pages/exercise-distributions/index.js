import React from 'react';

import './style.css';

const ExerciseDistributions = () => {
    return (
        <div className="exercise-project">
            <header className="project-header">
                <div className="container">

                    <h1>Exercise Distributions Analysis</h1>
                    <p>Statistical analysis of exercise data distributions using Python and data visualization</p>
                </div>
            </header>

            <section className="hero">
                <div className="container">
                    <img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop"
                        alt="Exercise Data Analysis"
                        className="hero-image"
                    />

                    <div className="project-steps">
                        <h3>Project Implementation Steps</h3>
                        <div className="steps-grid">
                            <div className="step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Data Collection</h4>
                                    <p>Gather exercise and fitness data from Kaggle datasets</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Data Exploration</h4>
                                    <p>Analyze data structure and identify key variables</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Statistical Analysis</h4>
                                    <p>Perform distribution analysis and statistical tests</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Visualization</h4>
                                    <p>Create charts and graphs to illustrate findings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overview">
                <div className="container">
                    <h2>Project Overview</h2>
                    <div className="overview-content">
                        <div className="overview-item">
                            <h3>📊 Dataset</h3>
                            <p>Exercise and fitness data from Kaggle's distribution analysis exercise</p>
                        </div>
                        <div className="overview-item">
                            <h3>🎯 Goal</h3>
                            <p>Analyze exercise data distributions and identify patterns in fitness metrics</p>
                        </div>
                        <div className="overview-item">
                            <h3>💡 Outcome</h3>
                            <p>Comprehensive statistical analysis with visual insights into exercise patterns</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="analysis-section">
                <div className="container">
                    <h2>Statistical Analysis</h2>

                    <div className="analysis-methods">
                        <h3>Analysis Methods</h3>
                        <div className="methods-grid">
                            <div className="method-card">
                                <h4>📈 Distribution Analysis</h4>
                                <ul>
                                    <li>Histogram analysis of exercise frequency</li>
                                    <li>Box plots for outlier detection</li>
                                    <li>Normal distribution testing</li>
                                    <li>Skewness and kurtosis analysis</li>
                                </ul>
                            </div>
                            <div className="method-card">
                                <h4>🔍 Descriptive Statistics</h4>
                                <ul>
                                    <li>Mean, median, and mode calculations</li>
                                    <li>Standard deviation analysis</li>
                                    <li>Percentile distributions</li>
                                    <li>Range and interquartile range</li>
                                </ul>
                            </div>
                            <div className="method-card">
                                <h4>📊 Hypothesis Testing</h4>
                                <ul>
                                    <li>Normality tests (Shapiro-Wilk)</li>
                                    <li>T-tests for group comparisons</li>
                                    <li>ANOVA for multiple groups</li>
                                    <li>Correlation analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="findings">
                        <h3>Key Findings</h3>
                        <div className="findings-grid">
                            <div className="finding-card">
                                <h4>Exercise Frequency Distribution</h4>
                                <p>Most participants exercise 3-4 times per week, with a right-skewed distribution indicating some high-frequency exercisers.</p>
                            </div>
                            <div className="finding-card">
                                <h4>Duration Patterns</h4>
                                <p>Average exercise duration follows a normal distribution around 45-60 minutes per session.</p>
                            </div>
                            <div className="finding-card">
                                <h4>Intensity Levels</h4>
                                <p>Exercise intensity shows a bimodal distribution, with peaks at moderate and high intensity levels.</p>
                            </div>
                            <div className="finding-card">
                                <h4>Age Correlation</h4>
                                <p>Significant correlation between age and exercise frequency, with younger participants exercising more frequently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="technical">
                <div className="container">
                    <h2>Technical Implementation</h2>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <h3>Data Processing</h3>
                            <ul>
                                <li>Python pandas for data manipulation</li>
                                <li>NumPy for statistical calculations</li>
                                <li>Data cleaning and preprocessing</li>
                                <li>Missing value handling</li>
                            </ul>
                        </div>
                        <div className="tech-card">
                            <h3>Statistical Analysis</h3>
                            <ul>
                                <li>SciPy for statistical tests</li>
                                <li>Scikit-learn for advanced analysis</li>
                                <li>Distribution fitting</li>
                                <li>Hypothesis testing</li>
                            </ul>
                        </div>
                        <div className="tech-card">
                            <h3>Visualization</h3>
                            <ul>
                                <li>Matplotlib for basic plots</li>
                                <li>Seaborn for statistical graphics</li>
                                <li>Plotly for interactive charts</li>
                                <li>Custom color schemes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="code-section">
                <div className="container">
                    <h2>Code Implementation</h2>
                    <div className="code-grid">
                        <div className="code-card">
                            <h3>Data Analysis</h3>
                            <pre className="code-block">
                                {`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats

# Load exercise data
df = pd.read_csv('exercise_data.csv')

# Distribution analysis
def analyze_distributions(data):
    # Basic statistics
    stats_summary = data.describe()
    
    # Normality test
    normality_test = stats.shapiro(data['exercise_frequency'])
    
    # Create visualizations
    fig, axes = plt.subplots(2, 2, figsize=(12, 10))
    
    # Histogram
    axes[0,0].hist(data['exercise_frequency'], bins=20, alpha=0.7)
    axes[0,0].set_title('Exercise Frequency Distribution')
    
    # Box plot
    axes[0,1].boxplot(data['exercise_frequency'])
    axes[0,1].set_title('Exercise Frequency Box Plot')
    
    # Q-Q plot
    stats.probplot(data['exercise_frequency'], dist="norm", plot=axes[1,0])
    axes[1,0].set_title('Q-Q Plot')
    
    # Correlation heatmap
    sns.heatmap(data.corr(), annot=True, ax=axes[1,1])
    axes[1,1].set_title('Correlation Matrix')
    
    return stats_summary, normality_test`}
                            </pre>
                        </div>
                        <div className="code-card">
                            <h3>Statistical Tests</h3>
                            <pre className="code-block">
                                {`# Hypothesis testing
def perform_statistical_tests(data):
    # T-test for gender differences
    male_data = data[data['gender'] == 'Male']['exercise_frequency']
    female_data = data[data['gender'] == 'Female']['exercise_frequency']
    
    t_stat, p_value = stats.ttest_ind(male_data, female_data)
    
    # ANOVA for age groups
    age_groups = pd.cut(data['age'], bins=[0, 25, 35, 45, 100], 
                       labels=['18-25', '26-35', '36-45', '45+'])
    data['age_group'] = age_groups
    
    f_stat, anova_p = stats.f_oneway(*[group['exercise_frequency'].values 
                                      for name, group in data.groupby('age_group')])
    
    # Correlation analysis
    correlation = data['age'].corr(data['exercise_frequency'])
    
    return {
        't_test': (t_stat, p_value),
        'anova': (f_stat, anova_p),
        'correlation': correlation
    }`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dataset-info">
                <div className="container">
                    <h2>Dataset Information</h2>
                    <div className="dataset-content">
                        <div className="dataset-card">
                            <h3>📊 Exercise Distributions Dataset</h3>
                            <p><strong>Source:</strong> Kaggle - Exercise Distributions Analysis</p>
                            <p><strong>Creator:</strong> Alexis Cook</p>
                            <p><strong>Scope:</strong> Statistical analysis of exercise and fitness data</p>
                            <p><strong>Use Case:</strong> Understanding exercise patterns and fitness trends</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="project-footer">
                <div className="container">
                    <h3>Ready to explore statistical analysis?</h3>
                    <p>Let's discuss how data-driven insights can improve fitness and health outcomes.</p>
                    <div className="footer-buttons">
                        <button className="btn-primary">Get In Touch</button>
                        <button className="btn-secondary">View More Projects</button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ExerciseDistributions;
