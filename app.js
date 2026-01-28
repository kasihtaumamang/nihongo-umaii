// Japanese Characters Data
const hiraganaData = [
    { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
    { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
    { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
    { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
    { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
];

const katakanaData = [
    { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' },
    { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' },
    { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' },
    { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' },
    { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' },
    { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' },
    { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' },
    { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' },
    { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' },
    { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' }, { char: 'ン', romaji: 'n' }
];

const vocabularyData = [
    // Greetings
    { japanese: 'こんにちは', romaji: 'konnichiwa', english: 'Hello', category: 'greetings' },
    { japanese: 'おはよう', romaji: 'ohayou', english: 'Good morning', category: 'greetings' },
    { japanese: 'こんばんは', romaji: 'konbanwa', english: 'Good evening', category: 'greetings' },
    { japanese: 'さようなら', romaji: 'sayounara', english: 'Goodbye', category: 'greetings' },
    { japanese: 'ありがとう', romaji: 'arigatou', english: 'Thank you', category: 'greetings' },
    { japanese: 'すみません', romaji: 'sumimasen', english: 'Excuse me', category: 'greetings' },
    { japanese: 'ごめんなさい', romaji: 'gomennasai', english: 'I\'m sorry', category: 'greetings' },
    { japanese: 'おやすみなさい', romaji: 'oyasuminasai', english: 'Good night', category: 'greetings' },
    
    // Numbers
    { japanese: '一', romaji: 'ichi', english: 'One', category: 'numbers' },
    { japanese: '二', romaji: 'ni', english: 'Two', category: 'numbers' },
    { japanese: '三', romaji: 'san', english: 'Three', category: 'numbers' },
    { japanese: '四', romaji: 'shi/yon', english: 'Four', category: 'numbers' },
    { japanese: '五', romaji: 'go', english: 'Five', category: 'numbers' },
    { japanese: '六', romaji: 'roku', english: 'Six', category: 'numbers' },
    { japanese: '七', romaji: 'shichi/nana', english: 'Seven', category: 'numbers' },
    { japanese: '八', romaji: 'hachi', english: 'Eight', category: 'numbers' },
    { japanese: '九', romaji: 'kyuu/ku', english: 'Nine', category: 'numbers' },
    { japanese: '十', romaji: 'juu', english: 'Ten', category: 'numbers' },
    
    // Colors
    { japanese: '赤', romaji: 'aka', english: 'Red', category: 'colors' },
    { japanese: '青', romaji: 'ao', english: 'Blue', category: 'colors' },
    { japanese: '黄色', romaji: 'kiiro', english: 'Yellow', category: 'colors' },
    { japanese: '緑', romaji: 'midori', english: 'Green', category: 'colors' },
    { japanese: '白', romaji: 'shiro', english: 'White', category: 'colors' },
    { japanese: '黒', romaji: 'kuro', english: 'Black', category: 'colors' },
    { japanese: 'ピンク', romaji: 'pinku', english: 'Pink', category: 'colors' },
    { japanese: 'オレンジ', romaji: 'orenji', english: 'Orange', category: 'colors' },
    
    // Family
    { japanese: '父', romaji: 'chichi', english: 'Father', category: 'family' },
    { japanese: '母', romaji: 'haha', english: 'Mother', category: 'family' },
    { japanese: '兄', romaji: 'ani', english: 'Older brother', category: 'family' },
    { japanese: '姉', romaji: 'ane', english: 'Older sister', category: 'family' },
    { japanese: '弟', romaji: 'otouto', english: 'Younger brother', category: 'family' },
    { japanese: '妹', romaji: 'imouto', english: 'Younger sister', category: 'family' },
    { japanese: '祖父', romaji: 'sofu', english: 'Grandfather', category: 'family' },
    { japanese: '祖母', romaji: 'sobo', english: 'Grandmother', category: 'family' },
    
    // Food
    { japanese: 'ご飯', romaji: 'gohan', english: 'Rice/Meal', category: 'food' },
    { japanese: '水', romaji: 'mizu', english: 'Water', category: 'food' },
    { japanese: 'パン', romaji: 'pan', english: 'Bread', category: 'food' },
    { japanese: '魚', romaji: 'sakana', english: 'Fish', category: 'food' },
    { japanese: '肉', romaji: 'niku', english: 'Meat', category: 'food' },
    { japanese: '野菜', romaji: 'yasai', english: 'Vegetables', category: 'food' },
    { japanese: '果物', romaji: 'kudamono', english: 'Fruit', category: 'food' },
    { japanese: 'お茶', romaji: 'ocha', english: 'Tea', category: 'food' },
    { japanese: 'コーヒー', romaji: 'koohii', english: 'Coffee', category: 'food' },
    { japanese: '寿司', romaji: 'sushi', english: 'Sushi', category: 'food' }
];

// State Management
let learnedHiragana = new Set();
let learnedKatakana = new Set();
let currentPracticeChar = null;
let currentPracticeType = null;
let quizData = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizType = '';
let flashcardData = [];
let currentFlashcardIndex = 0;
let flashcardType = '';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    loadProgress();
    updateStats();
    loadHiragana();
    loadKatakana();
    loadVocabulary();
    initCategoryButtons();
    initPracticeMode();
    initQuiz();
    initFlashcards();
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            navigateTo(targetId);
            
            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });
    
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
    
    if (!themeToggle || !themeIcon) {
        console.warn('Theme toggle elements not found');
        return;
    }
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Update icon and save preference
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Load Hiragana
function loadHiragana() {
    const container = document.getElementById('hiraganaContent');
    container.innerHTML = '';
    
    hiraganaData.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        if (learnedHiragana.has(item.char)) {
            card.classList.add('learned');
        }
        card.innerHTML = `
            <div class="character">${item.char}</div>
            <div class="romaji">${item.romaji}</div>
        `;
        card.addEventListener('click', () => {
            toggleLearned('hiragana', item.char, card);
        });
        container.appendChild(card);
    });
}

// Load Katakana
function loadKatakana() {
    const container = document.getElementById('katakanaContent');
    container.innerHTML = '';
    
    katakanaData.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        if (learnedKatakana.has(item.char)) {
            card.classList.add('learned');
        }
        card.innerHTML = `
            <div class="character">${item.char}</div>
            <div class="romaji">${item.romaji}</div>
        `;
        card.addEventListener('click', () => {
            toggleLearned('katakana', item.char, card);
        });
        container.appendChild(card);
    });
}

// Toggle Learned Status
function toggleLearned(type, char, card) {
    if (type === 'hiragana') {
        if (learnedHiragana.has(char)) {
            learnedHiragana.delete(char);
            card.classList.remove('learned');
        } else {
            learnedHiragana.add(char);
            card.classList.add('learned');
        }
        localStorage.setItem('learnedHiragana', JSON.stringify([...learnedHiragana]));
    } else if (type === 'katakana') {
        if (learnedKatakana.has(char)) {
            learnedKatakana.delete(char);
            card.classList.remove('learned');
        } else {
            learnedKatakana.add(char);
            card.classList.add('learned');
        }
        localStorage.setItem('learnedKatakana', JSON.stringify([...learnedKatakana]));
    }
    updateStats();
}

// Practice Mode
function initPracticeMode() {
    // Hiragana practice
    document.getElementById('hiraganaStudyMode').addEventListener('click', () => {
        document.getElementById('hiraganaContent').style.display = 'grid';
        document.getElementById('hiraganaPractice').style.display = 'none';
    });
    
    document.getElementById('hiraganaPracticeMode').addEventListener('click', () => {
        document.getElementById('hiraganaContent').style.display = 'none';
        document.getElementById('hiraganaPractice').style.display = 'block';
        startPractice('hiragana');
    });
    
    document.getElementById('hiraganaCheckBtn').addEventListener('click', () => {
        checkPracticeAnswer('hiragana');
    });
    
    document.getElementById('hiraganaNextBtn').addEventListener('click', () => {
        startPractice('hiragana');
    });
    
    document.getElementById('hiraganaInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPracticeAnswer('hiragana');
        }
    });
    
    // Katakana practice
    document.getElementById('katakanaStudyMode').addEventListener('click', () => {
        document.getElementById('katakanaContent').style.display = 'grid';
        document.getElementById('katakanaPractice').style.display = 'none';
    });
    
    document.getElementById('katakanaPracticeMode').addEventListener('click', () => {
        document.getElementById('katakanaContent').style.display = 'none';
        document.getElementById('katakanaPractice').style.display = 'block';
        startPractice('katakana');
    });
    
    document.getElementById('katakanaCheckBtn').addEventListener('click', () => {
        checkPracticeAnswer('katakana');
    });
    
    document.getElementById('katakanaNextBtn').addEventListener('click', () => {
        startPractice('katakana');
    });
    
    document.getElementById('katakanaInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPracticeAnswer('katakana');
        }
    });
}

function startPractice(type) {
    const data = type === 'hiragana' ? hiraganaData : katakanaData;
    const randomIndex = Math.floor(Math.random() * data.length);
    currentPracticeChar = data[randomIndex];
    currentPracticeType = type;
    
    const charElement = document.getElementById(`${type}Char`);
    const inputElement = document.getElementById(`${type}Input`);
    const resultElement = document.getElementById(`${type}Result`);
    
    charElement.textContent = currentPracticeChar.char;
    inputElement.value = '';
    resultElement.textContent = '';
    resultElement.className = 'practice-result';
    inputElement.focus();
}

function checkPracticeAnswer(type) {
    const inputElement = document.getElementById(`${type}Input`);
    const resultElement = document.getElementById(`${type}Result`);
    const userAnswer = inputElement.value.trim().toLowerCase();
    
    if (userAnswer === currentPracticeChar.romaji) {
        resultElement.textContent = '✓ Correct!';
        resultElement.className = 'practice-result correct';
    } else {
        resultElement.textContent = `✗ Incorrect. The answer is: ${currentPracticeChar.romaji}`;
        resultElement.className = 'practice-result incorrect';
    }
}

// Vocabulary
function loadVocabulary(category = 'all') {
    const container = document.getElementById('vocabularyContent');
    container.innerHTML = '';
    
    const filteredVocab = category === 'all' 
        ? vocabularyData 
        : vocabularyData.filter(item => item.category === category);
    
    filteredVocab.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        card.innerHTML = `
            <div class="vocab-japanese">${item.japanese}</div>
            <div class="vocab-romaji">${item.romaji}</div>
            <div class="vocab-english">${item.english}</div>
            <div class="vocab-category">${item.category}</div>
        `;
        container.appendChild(card);
    });
    
    // Update category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Initialize category buttons
function initCategoryButtons() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadVocabulary(btn.dataset.category);
        });
    });
}

// Quiz
function initQuiz() {
    document.querySelectorAll('.quiz-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            quizType = btn.dataset.type;
            startQuiz();
        });
    });
    
    document.getElementById('quizQuitBtn').addEventListener('click', () => {
        endQuiz();
    });
    
    document.getElementById('quizRetryBtn').addEventListener('click', () => {
        startQuiz();
    });
}

function startQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    
    // Generate quiz questions based on type
    if (quizType === 'hiragana') {
        quizData = generateCharacterQuiz(hiraganaData);
    } else if (quizType === 'katakana') {
        quizData = generateCharacterQuiz(katakanaData);
    } else if (quizType === 'vocabulary') {
        quizData = generateVocabularyQuiz();
    } else if (quizType === 'mixed') {
        const hiraQuiz = generateCharacterQuiz(hiraganaData.slice(0, 3));
        const kataQuiz = generateCharacterQuiz(katakanaData.slice(0, 3));
        const vocabQuiz = generateVocabularyQuiz(4);
        quizData = [...hiraQuiz, ...kataQuiz, ...vocabQuiz];
        shuffleArray(quizData);
    }
    
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizGame').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    
    showQuizQuestion();
}

function generateCharacterQuiz(data, count = 10) {
    const questions = [];
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < Math.min(count, shuffled.length); i++) {
        const correct = shuffled[i];
        const options = [correct.romaji];
        
        // Add 3 random wrong answers
        while (options.length < 4) {
            const random = data[Math.floor(Math.random() * data.length)];
            if (!options.includes(random.romaji)) {
                options.push(random.romaji);
            }
        }
        
        shuffleArray(options);
        
        questions.push({
            question: correct.char,
            options: options,
            correct: correct.romaji
        });
    }
    
    return questions;
}

function generateVocabularyQuiz(count = 10) {
    const questions = [];
    const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < Math.min(count, shuffled.length); i++) {
        const correct = shuffled[i];
        const options = [correct.english];
        
        // Add 3 random wrong answers
        while (options.length < 4) {
            const random = vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
            if (!options.includes(random.english)) {
                options.push(random.english);
            }
        }
        
        shuffleArray(options);
        
        questions.push({
            question: correct.japanese,
            options: options,
            correct: correct.english
        });
    }
    
    return questions;
}

function showQuizQuestion() {
    if (currentQuizIndex >= quizData.length) {
        showQuizResults();
        return;
    }
    
    const question = quizData[currentQuizIndex];
    
    document.getElementById('quizCurrentQuestion').textContent = currentQuizIndex + 1;
    document.getElementById('quizTotalQuestions').textContent = quizData.length;
    document.getElementById('quizCurrentScore').textContent = quizScore;
    document.getElementById('quizQuestion').textContent = question.question;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => {
            selectQuizOption(option, question.correct, optionBtn);
        });
        optionsContainer.appendChild(optionBtn);
    });
}

function selectQuizOption(selected, correct, element) {
    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.add('disabled');
        if (opt.textContent === correct) {
            opt.classList.add('correct');
        }
        if (opt === element && selected !== correct) {
            opt.classList.add('incorrect');
        }
    });
    
    // Update score
    if (selected === correct) {
        quizScore++;
    }
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuizIndex++;
        showQuizQuestion();
    }, 1500);
}

function showQuizResults() {
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    const percentage = Math.round((quizScore / quizData.length) * 100);
    document.getElementById('finalScore').textContent = percentage;
    
    let message = '';
    if (percentage >= 90) {
        message = '素晴らしい！(Subarashii!) Excellent work!';
    } else if (percentage >= 70) {
        message = 'よくできました！(Yoku dekimashita!) Well done!';
    } else if (percentage >= 50) {
        message = '頑張りました！(Ganbarimashita!) Good effort!';
    } else {
        message = 'もう一度！(Mou ichido!) Try again!';
    }
    
    document.getElementById('resultsMessage').textContent = message;
    
    // Save quiz score
    const savedScore = localStorage.getItem('bestQuizScore') || 0;
    if (percentage > savedScore) {
        localStorage.setItem('bestQuizScore', percentage);
    }
    updateStats();
}

function endQuiz() {
    document.getElementById('quizStart').style.display = 'block';
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
}

// Flashcards
function initFlashcards() {
    document.querySelectorAll('.flashcard-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            flashcardType = btn.dataset.type;
            startFlashcards();
        });
    });
    
    document.getElementById('flashcardFlipBtn').addEventListener('click', () => {
        flipFlashcard();
    });
    
    document.getElementById('flashcardPrevBtn').addEventListener('click', () => {
        navigateFlashcard(-1);
    });
    
    document.getElementById('flashcardNextBtn').addEventListener('click', () => {
        navigateFlashcard(1);
    });
    
    document.getElementById('flashcardShuffleBtn').addEventListener('click', () => {
        shuffleFlashcards();
    });
    
    document.getElementById('flashcardExitBtn').addEventListener('click', () => {
        exitFlashcards();
    });
    
    // Click on flashcard to flip
    document.getElementById('flashcard').addEventListener('click', () => {
        flipFlashcard();
    });
    
    // Keyboard support for flashcard
    document.getElementById('flashcard').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            flipFlashcard();
        }
    });
}

function startFlashcards() {
    currentFlashcardIndex = 0;
    
    // Prepare flashcard data based on type
    if (flashcardType === 'hiragana') {
        flashcardData = hiraganaData.map(item => ({
            front: item.char,
            back: item.romaji,
            type: 'character'
        }));
    } else if (flashcardType === 'katakana') {
        flashcardData = katakanaData.map(item => ({
            front: item.char,
            back: item.romaji,
            type: 'character'
        }));
    } else if (flashcardType === 'vocabulary') {
        flashcardData = vocabularyData.map(item => ({
            front: item.japanese,
            back: item.english,
            extra: item.romaji,
            type: 'vocabulary'
        }));
    } else if (flashcardType === 'all') {
        const hiraCards = hiraganaData.map(item => ({
            front: item.char,
            back: item.romaji,
            type: 'character'
        }));
        const kataCards = katakanaData.map(item => ({
            front: item.char,
            back: item.romaji,
            type: 'character'
        }));
        const vocabCards = vocabularyData.map(item => ({
            front: item.japanese,
            back: item.english,
            extra: item.romaji,
            type: 'vocabulary'
        }));
        flashcardData = [...hiraCards, ...kataCards, ...vocabCards];
        shuffleArray(flashcardData);
    }
    
    document.getElementById('flashcardStart').style.display = 'none';
    document.getElementById('flashcardGame').style.display = 'block';
    
    showFlashcard();
}

function showFlashcard() {
    // Guard clause for empty data
    if (!flashcardData || flashcardData.length === 0 || currentFlashcardIndex >= flashcardData.length) {
        console.error('No flashcard data available');
        return;
    }
    
    const card = flashcardData[currentFlashcardIndex];
    const flashcardElement = document.getElementById('flashcard');
    
    // Remove flipped class to show front
    flashcardElement.classList.remove('flipped');
    
    // Update content
    document.getElementById('flashcardFront').textContent = card.front;
    document.getElementById('flashcardBack').textContent = card.back;
    document.getElementById('flashcardExtra').textContent = card.extra || '';
    
    // Update progress
    document.getElementById('flashcardCurrent').textContent = currentFlashcardIndex + 1;
    document.getElementById('flashcardTotal').textContent = flashcardData.length;
    
    // Update button states
    document.getElementById('flashcardPrevBtn').disabled = currentFlashcardIndex === 0;
    document.getElementById('flashcardNextBtn').disabled = currentFlashcardIndex === flashcardData.length - 1;
}

function flipFlashcard() {
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.toggle('flipped');
}

function navigateFlashcard(direction) {
    const newIndex = currentFlashcardIndex + direction;
    
    if (newIndex >= 0 && newIndex < flashcardData.length) {
        currentFlashcardIndex = newIndex;
        showFlashcard();
    }
}

function shuffleFlashcards() {
    shuffleArray(flashcardData);
    currentFlashcardIndex = 0;
    showFlashcard();
}

function exitFlashcards() {
    document.getElementById('flashcardStart').style.display = 'block';
    document.getElementById('flashcardGame').style.display = 'none';
}

// Utility Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Progress Management
function loadProgress() {
    const savedHiragana = localStorage.getItem('learnedHiragana');
    const savedKatakana = localStorage.getItem('learnedKatakana');
    
    if (savedHiragana) {
        learnedHiragana = new Set(JSON.parse(savedHiragana));
    }
    
    if (savedKatakana) {
        learnedKatakana = new Set(JSON.parse(savedKatakana));
    }
}

function updateStats() {
    document.getElementById('hiraganaProgress').textContent = learnedHiragana.size;
    document.getElementById('katakanaProgress').textContent = learnedKatakana.size;
    document.getElementById('vocabProgress').textContent = vocabularyData.length;
    
    const bestScore = localStorage.getItem('bestQuizScore') || 0;
    document.getElementById('quizScore').textContent = bestScore + '%';
}
