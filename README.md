# 🇯🇵 Nihongo Mantappu - Japanese Learning Web Application

A comprehensive web application for learning Japanese language, featuring interactive lessons for Hiragana, Katakana, vocabulary, and quizzes.

## ✨ Features

- **📝 Hiragana Learning**: Master all 46 basic Hiragana characters with study and practice modes
- **📝 Katakana Learning**: Learn all 46 basic Katakana characters with interactive exercises
- **📚 Vocabulary Builder**: Learn common Japanese words organized by categories:
  - Greetings
  - Numbers
  - Colors
  - Family
  - Food
- **🎯 Interactive Quizzes**: Test your knowledge with multiple quiz types:
  - Hiragana Quiz
  - Katakana Quiz
  - Vocabulary Quiz
  - Mixed Quiz
- **📊 Progress Tracking**: Track your learning progress with automatic saving
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🌐 Netlify Ready**: Configured for easy deployment on Netlify

## 🚀 Quick Start

### Run Locally

1. Clone this repository:
```bash
git clone https://github.com/kasihtaumamang/nihongo-mantappu.git
cd nihongo-mantappu
```

2. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a simple local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

### Deploy to Netlify

#### Option 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Option 2: Netlify Dashboard
1. Go to [Netlify](https://www.netlify.com/)
2. Sign in or create an account
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Netlify will automatically detect the configuration from `netlify.toml`
6. Click "Deploy site"

#### Option 3: Deploy Button
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kasihtaumamang/nihongo-mantappu)

## 📖 How to Use

### Learning Hiragana & Katakana
1. Navigate to Hiragana or Katakana section
2. **Study Mode**: Click on characters to mark them as learned (green = learned)
3. **Practice Mode**: Test yourself by typing the romaji for displayed characters
4. Progress is automatically saved in your browser

### Building Vocabulary
1. Go to the Vocabulary section
2. Browse words by category or view all
3. Each card shows:
   - Japanese characters
   - Romaji (pronunciation)
   - English translation
   - Category tag

### Taking Quizzes
1. Navigate to the Quiz section
2. Select a quiz type (Hiragana, Katakana, Vocabulary, or Mixed)
3. Answer 10 questions by clicking the correct option
4. View your results and try to beat your best score!

## 🛠️ Technology Stack

- **HTML5**: Structure and content
- **CSS3**: Styling with modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript**: All functionality without external dependencies
- **Local Storage**: Progress persistence
- **Google Fonts**: Noto Sans JP for Japanese characters, Poppins for UI text

## 📁 File Structure

```
nihongo-mantappu/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── app.js              # Application logic
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #e63946;      /* Main accent color */
    --secondary-color: #457b9d;    /* Secondary accent */
    --accent-color: #f1faee;       /* Light background */
    --dark-color: #1d3557;         /* Text color */
}
```

### Adding More Content
Edit `app.js` to add more characters or vocabulary:
- Add to `hiraganaData` array for more Hiragana
- Add to `katakanaData` array for more Katakana
- Add to `vocabularyData` array for more vocabulary

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Japanese language data sourced from standard learning materials
- Font: Noto Sans JP by Google Fonts
- Inspired by the joy of learning Japanese

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation above
- Contact the maintainers

---

**がんばってください！** (Ganbatte kudasai! - Good luck with your studies!)

Made with ❤️ for Japanese language learners