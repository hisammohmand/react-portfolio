#!/bin/bash

echo "🚀 Setting up remaining 7 project repositories..."

# List of remaining projects
projects=(
    "real-time-monitoring"
    "financial-fraud-detection"
    "healthcare-analytics"
    "e-commerce-analytics"
    "social-media-sentiment"
    "energy-consumption-prediction"
    "climate-change-analysis"
)

for project in "${projects[@]}"; do
    echo "📁 Setting up $project..."
    
    # Navigate to project directory
    cd "$project"
    
    # Create directory structure
    mkdir -p {data,notebooks,src,models,reports,docs}
    
    # Copy files from trust-safety-analytics
    cp ../trust-safety-analytics/requirements.txt .
    cp ../trust-safety-analytics/.gitignore .
    
    # Create README.md (you'll customize this later)
    cp ../trust-safety-analytics/README.md .
    
    # Initialize Git
    git init
    git add .
    git commit -m "Initial commit: $project"
    
    echo "✅ $project setup complete!"
    echo ""
    
    # Go back to parent directory
    cd ..
done

echo "🎉 All projects setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Create GitHub repositories for each project"
echo "2. Customize README.md files for each project"
echo "3. Add remote origins and push to GitHub"
echo ""
echo "🔗 GitHub Repository URLs to create:"
for project in "${projects[@]}"; do
    echo "   https://github.com/hisammohmand/$project"
done

