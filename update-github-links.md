# Update GitHub Links

## Current Setup
Your portfolio now has enhanced "View Full Project" buttons that link to detailed project pages, plus "View Code" buttons that link to GitHub repositories.

## To Update GitHub Links

1. **Replace `yourusername`** in `src/content_option.js` with your actual GitHub username
2. **Create the repositories** on GitHub (if they don't exist)
3. **Update the links** to point to your actual repositories

## Example Update

Change this:
```javascript
githubLink: "https://github.com/yourusername/trust-safety-analytics"
```

To this:
```javascript
githubLink: "https://github.com/hisammohmand/trust-safety-analytics"
```

## Repository Names to Create

1. `trust-safety-analytics`
2. `fraud-detection`
3. `healthcare-analytics`
4. `real-time-monitoring`
5. `ecommerce-analytics`
6. `social-media-sentiment`
7. `energy-consumption-prediction`
8. `climate-change-analysis`

## Features of the Enhanced Buttons

### Primary Button - "View Full Project"
- Links to detailed project pages within your portfolio
- Shows comprehensive project information
- Includes project overview, results, and technical details

### Secondary Button - "View Code"
- Links to GitHub repositories
- Opens in new tab
- Shows the actual code and documentation

## Button Styling
- **Primary Button**: Gradient background with arrow animation
- **Secondary Button**: Transparent with border, changes color on hover
- **Responsive**: Works on all device sizes
- **Accessible**: Proper ARIA labels and keyboard navigation

## Testing the Links

1. Start the development server: `npm start`
2. Navigate to the portfolio section
3. Click "View Full Project" to see detailed pages
4. Click "View Code" to visit GitHub repositories (after updating links)

## Customization Options

You can also:
- Remove GitHub links for projects that don't have public repositories
- Add different external links (e.g., live demos, documentation)
- Customize button colors and animations in the CSS
- Add more action buttons as needed


