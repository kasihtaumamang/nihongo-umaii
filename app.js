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
    { japanese: 'こんにちは', romaji: 'konnichiwa', english: 'Hello', category: 'greetings', level: 'N5' },
    { japanese: 'おはよう', romaji: 'ohayou', english: 'Good morning', category: 'greetings', level: 'N5' },
    { japanese: 'こんばんは', romaji: 'konbanwa', english: 'Good evening', category: 'greetings', level: 'N5' },
    { japanese: 'さようなら', romaji: 'sayounara', english: 'Goodbye', category: 'greetings', level: 'N5' },
    { japanese: 'ありがとう', romaji: 'arigatou', english: 'Thank you', category: 'greetings', level: 'N5' },
    { japanese: 'すみません', romaji: 'sumimasen', english: 'Excuse me', category: 'greetings', level: 'N5' },
    { japanese: 'ごめんなさい', romaji: 'gomennasai', english: 'I\'m sorry', category: 'greetings', level: 'N4' },
    { japanese: 'おやすみなさい', romaji: 'oyasuminasai', english: 'Good night', category: 'greetings', level: 'N5' },
    
    // Numbers
    { japanese: '一', romaji: 'ichi', english: 'One', category: 'numbers', level: 'N5' },
    { japanese: '二', romaji: 'ni', english: 'Two', category: 'numbers', level: 'N5' },
    { japanese: '三', romaji: 'san', english: 'Three', category: 'numbers', level: 'N5' },
    { japanese: '四', romaji: 'shi/yon', english: 'Four', category: 'numbers', level: 'N5' },
    { japanese: '五', romaji: 'go', english: 'Five', category: 'numbers', level: 'N5' },
    { japanese: '六', romaji: 'roku', english: 'Six', category: 'numbers', level: 'N5' },
    { japanese: '七', romaji: 'shichi/nana', english: 'Seven', category: 'numbers', level: 'N5' },
    { japanese: '八', romaji: 'hachi', english: 'Eight', category: 'numbers', level: 'N5' },
    { japanese: '九', romaji: 'kyuu/ku', english: 'Nine', category: 'numbers', level: 'N5' },
    { japanese: '十', romaji: 'juu', english: 'Ten', category: 'numbers', level: 'N5' },
    
    // Colors
    { japanese: '赤', romaji: 'aka', english: 'Red', category: 'colors', level: 'N5' },
    { japanese: '青', romaji: 'ao', english: 'Blue', category: 'colors', level: 'N5' },
    { japanese: '黄色', romaji: 'kiiro', english: 'Yellow', category: 'colors', level: 'N4' },
    { japanese: '緑', romaji: 'midori', english: 'Green', category: 'colors', level: 'N4' },
    { japanese: '白', romaji: 'shiro', english: 'White', category: 'colors', level: 'N5' },
    { japanese: '黒', romaji: 'kuro', english: 'Black', category: 'colors', level: 'N5' },
    { japanese: 'ピンク', romaji: 'pinku', english: 'Pink', category: 'colors', level: 'N4' },
    { japanese: 'オレンジ', romaji: 'orenji', english: 'Orange', category: 'colors', level: 'N4' },
    
    // Family
    { japanese: '父', romaji: 'chichi', english: 'Father', category: 'family', level: 'N5' },
    { japanese: '母', romaji: 'haha', english: 'Mother', category: 'family', level: 'N5' },
    { japanese: '兄', romaji: 'ani', english: 'Older brother', category: 'family', level: 'N4' },
    { japanese: '姉', romaji: 'ane', english: 'Older sister', category: 'family', level: 'N4' },
    { japanese: '弟', romaji: 'otouto', english: 'Younger brother', category: 'family', level: 'N4' },
    { japanese: '妹', romaji: 'imouto', english: 'Younger sister', category: 'family', level: 'N4' },
    { japanese: '祖父', romaji: 'sofu', english: 'Grandfather', category: 'family', level: 'N3' },
    { japanese: '祖母', romaji: 'sobo', english: 'Grandmother', category: 'family', level: 'N3' },
    
    // Food
    { japanese: 'ご飯', romaji: 'gohan', english: 'Rice/Meal', category: 'food', level: 'N5' },
    { japanese: '水', romaji: 'mizu', english: 'Water', category: 'food', level: 'N5' },
    { japanese: 'パン', romaji: 'pan', english: 'Bread', category: 'food', level: 'N5' },
    { japanese: '魚', romaji: 'sakana', english: 'Fish', category: 'food', level: 'N5' },
    { japanese: '肉', romaji: 'niku', english: 'Meat', category: 'food', level: 'N5' },
    { japanese: '野菜', romaji: 'yasai', english: 'Vegetables', category: 'food', level: 'N4' },
    { japanese: '果物', romaji: 'kudamono', english: 'Fruit', category: 'food', level: 'N4' },
    { japanese: 'お茶', romaji: 'ocha', english: 'Tea', category: 'food', level: 'N5' },
    { japanese: 'コーヒー', romaji: 'koohii', english: 'Coffee', category: 'food', level: 'N5' },
    { japanese: '寿司', romaji: 'sushi', english: 'Sushi', category: 'food', level: 'N5' },
    
    // N2 Level Vocabulary
    { japanese: '感謝', romaji: 'kansha', english: 'Gratitude', category: 'greetings', level: 'N2' },
    { japanese: '尊敬', romaji: 'sonkei', english: 'Respect', category: 'greetings', level: 'N2' },
    { japanese: '歓迎', romaji: 'kangei', english: 'Welcome', category: 'greetings', level: 'N2' },
    { japanese: '紫', romaji: 'murasaki', english: 'Purple', category: 'colors', level: 'N2' },
    { japanese: '茶色', romaji: 'chairo', english: 'Brown', category: 'colors', level: 'N2' },
    { japanese: '親戚', romaji: 'shinseki', english: 'Relatives', category: 'family', level: 'N2' },
    { japanese: '料理', romaji: 'ryouri', english: 'Cooking', category: 'food', level: 'N2' },
    { japanese: '食材', romaji: 'shokuzai', english: 'Ingredients', category: 'food', level: 'N2' },
    
    // N1 Level Vocabulary
    { japanese: '敬語', romaji: 'keigo', english: 'Honorific language', category: 'greetings', level: 'N1' },
    { japanese: '挨拶', romaji: 'aisatsu', english: 'Greeting/Salutation', category: 'greetings', level: 'N1' },
    { japanese: '色彩', romaji: 'shikisai', english: 'Color/Hue', category: 'colors', level: 'N1' },
    { japanese: '血縁', romaji: 'ketsuen', english: 'Blood relation', category: 'family', level: 'N1' },
    { japanese: '食糧', romaji: 'shokuryou', english: 'Food provisions', category: 'food', level: 'N1' },
    { japanese: '栄養', romaji: 'eiyou', english: 'Nutrition', category: 'food', level: 'N1' }
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
let quizLevel = 'all';
let vocabularyLevel = 'all';
let vocabularyCategory = 'all';
let flashcardData = [];
let currentFlashcardIndex = 0;
let flashcardType = '';
let flashcardLevel = 'all';
let customQuestions = [];
let editingQuestionId = null;

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
    initCustomQuiz();
    loadCustomQuestions();
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
// Helper function to filter vocabulary by level
function filterVocabularyByLevel(vocabData, level) {
    if (level === 'all') {
        return vocabData;
    }
    return vocabData.filter(item => item.level === level);
}

function loadVocabulary(category = null, level = null) {
    // Use stored values if not provided
    if (category !== null) vocabularyCategory = category;
    if (level !== null) vocabularyLevel = level;
    
    const container = document.getElementById('vocabularyContent');
    const messageEl = document.getElementById('noVocabMessage');
    container.innerHTML = '';
    
    // Filter by both category and level
    let filteredVocab = vocabularyData;
    
    if (vocabularyCategory !== 'all') {
        filteredVocab = filteredVocab.filter(item => item.category === vocabularyCategory);
    }
    
    filteredVocab = filterVocabularyByLevel(filteredVocab, vocabularyLevel);
    
    // Show message if no results
    if (filteredVocab.length === 0) {
        container.style.display = 'none';
        messageEl.style.display = 'block';
    } else {
        container.style.display = 'grid';
        messageEl.style.display = 'none';
        
        filteredVocab.forEach(item => {
            const card = document.createElement('div');
            card.className = 'vocab-card';
            card.innerHTML = `
                <div class="vocab-japanese">${item.japanese}</div>
                <div class="vocab-romaji">${item.romaji}</div>
                <div class="vocab-english">${item.english}</div>
                <div class="vocab-category">${item.category}</div>
                <div class="vocab-level">${item.level}</div>
            `;
            container.appendChild(card);
        });
    }
    
    // Update category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === vocabularyCategory) {
            btn.classList.add('active');
        }
    });
    
    // Update level buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.level === vocabularyLevel) {
            btn.classList.add('active');
        }
    });
}

// Initialize category buttons
function initCategoryButtons() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadVocabulary(btn.dataset.category, null);
        });
    });
    
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadVocabulary(null, btn.dataset.level);
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
    
    document.querySelectorAll('.quiz-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            quizLevel = btn.dataset.level;
            // Update active state
            document.querySelectorAll('.quiz-level-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
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
        const hiraQuiz = generateCharacterQuiz(hiraganaData, 3);
        const kataQuiz = generateCharacterQuiz(katakanaData, 3);
        const vocabQuiz = generateVocabularyQuiz(4);
        quizData = [...hiraQuiz, ...kataQuiz, ...vocabQuiz];
        shuffleArray(quizData);
    } else if (quizType === 'custom') {
        quizData = generateCustomQuiz();
        if (quizData.length === 0) {
            return; // Alert already shown in generateCustomQuiz
        }
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
    
    // Filter vocabulary by level
    const filteredVocab = filterVocabularyByLevel(vocabularyData, quizLevel);
    
    // If not enough items, notify and use all
    if (filteredVocab.length < 4) {
        console.warn(`Not enough vocabulary for level ${quizLevel}, using all levels`);
        const previousLevel = quizLevel;
        quizLevel = 'all';
        const result = generateVocabularyQuiz(count);
        quizLevel = previousLevel; // Restore the original level
        return result;
    }
    
    const shuffled = [...filteredVocab].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < Math.min(count, shuffled.length); i++) {
        const correct = shuffled[i];
        const options = [correct.english];
        
        // Add 3 random wrong answers from the same filtered set
        while (options.length < 4) {
            const random = filteredVocab[Math.floor(Math.random() * filteredVocab.length)];
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
    
    document.querySelectorAll('.flashcard-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            flashcardLevel = btn.dataset.level;
            // Update active state
            document.querySelectorAll('.flashcard-level-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
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
        // Filter vocabulary by level using helper function
        const filteredVocab = filterVocabularyByLevel(vocabularyData, flashcardLevel);
        
        flashcardData = filteredVocab.map(item => ({
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
        
        // Filter vocabulary by level using helper function
        const filteredVocab = filterVocabularyByLevel(vocabularyData, flashcardLevel);
        
        const vocabCards = filteredVocab.map(item => ({
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

// Custom Quiz Functions
function loadCustomQuestions() {
    try {
        const saved = localStorage.getItem('customQuestions');
        if (saved) {
            customQuestions = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error loading custom questions:', error);
        alert('Unable to load custom questions. Please check your browser settings.');
        customQuestions = [];
    }
    updateCustomQuestionsList();
}

function saveCustomQuestions() {
    try {
        localStorage.setItem('customQuestions', JSON.stringify(customQuestions));
        updateCustomQuestionsList();
    } catch (error) {
        console.error('Error saving custom questions:', error);
        if (error.name === 'QuotaExceededError') {
            alert('Storage limit exceeded. Please delete some questions.');
        } else {
            alert('Unable to save questions. Please check your browser settings.');
        }
    }
}

function initCustomQuiz() {
    // Show/hide custom quiz creator
    const createBtn = document.getElementById('showCustomQuizCreator');
    const manageBtn = document.getElementById('showCustomQuizManager');
    const creatorSection = document.getElementById('customQuizCreator');
    const managerSection = document.getElementById('customQuizManager');
    
    if (createBtn) {
        createBtn.addEventListener('click', () => {
            creatorSection.style.display = creatorSection.style.display === 'none' ? 'block' : 'none';
            managerSection.style.display = 'none';
        });
    }
    
    if (manageBtn) {
        manageBtn.addEventListener('click', () => {
            managerSection.style.display = managerSection.style.display === 'none' ? 'block' : 'none';
            creatorSection.style.display = 'none';
            updateCustomQuestionsList();
        });
    }
    
    // Add custom question form submission
    const form = document.getElementById('customQuestionForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            addCustomQuestion();
        });
    }
}

function addCustomQuestion() {
    const question = document.getElementById('customQuestion').value.trim();
    const option1 = document.getElementById('customOption1').value.trim();
    const option2 = document.getElementById('customOption2').value.trim();
    const option3 = document.getElementById('customOption3').value.trim();
    const option4 = document.getElementById('customOption4').value.trim();
    const correctAnswer = document.querySelector('input[name="correctAnswer"]:checked');
    const category = document.getElementById('customCategory').value.trim() || 'Custom';
    
    if (!question || !option1 || !option2 || !option3 || !option4 || !correctAnswer) {
        alert('Please fill in all fields and select the correct answer!');
        return;
    }
    
    // Validate input lengths
    if (question.length > 200) {
        alert('Question text is too long (max 200 characters)');
        return;
    }
    
    if (category.length > 50) {
        alert('Category name is too long (max 50 characters)');
        return;
    }
    
    const options = [option1, option2, option3, option4];
    
    // Check for duplicate options
    const uniqueOptions = new Set(options.map(opt => opt.toLowerCase()));
    if (uniqueOptions.size < options.length) {
        alert('All answer options must be unique!');
        return;
    }
    
    // Validate option lengths
    for (let opt of options) {
        if (opt.length > 100) {
            alert('Answer options are too long (max 100 characters each)');
            return;
        }
    }
    
    const correctIndex = parseInt(correctAnswer.value);
    
    // If editing, remove the old question first
    if (editingQuestionId) {
        customQuestions = customQuestions.filter(q => q.id !== editingQuestionId);
    }
    
    // Generate more robust ID (use existing ID if editing)
    const newQuestion = {
        id: editingQuestionId || (Date.now() + '-' + Math.random().toString(36).substr(2, 9)),
        question: question,
        options: options,
        correct: options[correctIndex],
        category: category
    };
    
    customQuestions.push(newQuestion);
    saveCustomQuestions();
    
    // Clear form and reset edit state
    document.getElementById('customQuestionForm').reset();
    editingQuestionId = null;
    
    // Reset button text
    const submitBtn = document.querySelector('#customQuestionForm button[type="submit"]');
    submitBtn.textContent = 'Add Question';
    
    alert(editingQuestionId ? 'Question updated successfully!' : 'Question added successfully!');
}

function updateCustomQuestionsList() {
    const list = document.getElementById('customQuestionsList');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (customQuestions.length === 0) {
        list.innerHTML = '<p class="no-questions">No custom questions yet. Create your first question!</p>';
        return;
    }
    
    customQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'custom-question-item';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'question-content';
        
        const questionLabel = document.createElement('strong');
        questionLabel.textContent = `Q${index + 1}: `;
        
        const questionText = document.createTextNode(q.question);
        
        const categorySpan = document.createElement('span');
        categorySpan.className = 'question-category';
        categorySpan.textContent = q.category;
        
        contentDiv.appendChild(questionLabel);
        contentDiv.appendChild(questionText);
        contentDiv.appendChild(document.createElement('br'));
        contentDiv.appendChild(categorySpan);
        
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'question-actions';
        
        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-outline btn-sm';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editCustomQuestion(q.id));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-outline btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteCustomQuestion(q.id));
        
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);
        
        item.appendChild(contentDiv);
        item.appendChild(actionsDiv);
        list.appendChild(item);
    });
}

function deleteCustomQuestion(id) {
    if (!confirm('Are you sure you want to delete this question?')) return;
    
    customQuestions = customQuestions.filter(q => q.id !== id);
    saveCustomQuestions();
}

function editCustomQuestion(id) {
    const question = customQuestions.find(q => q.id === id);
    if (!question) return;
    
    // Store the ID we're editing
    editingQuestionId = id;
    
    // Fill the form with existing data
    document.getElementById('customQuestion').value = question.question;
    document.getElementById('customOption1').value = question.options[0];
    document.getElementById('customOption2').value = question.options[1];
    document.getElementById('customOption3').value = question.options[2];
    document.getElementById('customOption4').value = question.options[3];
    document.getElementById('customCategory').value = question.category;
    
    // Check the correct answer radio button
    const correctIndex = question.options.indexOf(question.correct);
    document.querySelector(`input[name="correctAnswer"][value="${correctIndex}"]`).checked = true;
    
    // Show creator and hide manager
    document.getElementById('customQuizCreator').style.display = 'block';
    document.getElementById('customQuizManager').style.display = 'none';
    
    // Update button text
    const submitBtn = document.querySelector('#customQuestionForm button[type="submit"]');
    submitBtn.textContent = 'Update Question';
    
    // Scroll to form
    document.getElementById('customQuizCreator').scrollIntoView({ behavior: 'smooth' });
}

function generateCustomQuiz() {
    if (customQuestions.length < 4) {
        alert('You need at least 4 custom questions to start a quiz!');
        return [];
    }
    
    const shuffled = [...customQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(10, shuffled.length));
}
