// Book data based on the image
const books = [
    {
        id: 1,
        title: "Algorithms Notes for Professionals",
        category: "Algorithms",
        cover: "AlgorithmsNotesForProfessionals.jpg",
        pdfUrl: "pdfs/AlgorithmsNotesForProfessionals.pdf"
    },
    {
        id: 2,
        title: "Android Notes for Professionals",
        category: "Android",
        cover: "AndroidNotesForProfessionals.jpg",
        pdfUrl: "pdfs/AndroidNotesForProfessionals.pdf"
    },
    {
        id: 3,
        title: "Angular 2+ Notes for Professionals",
        category: "Angular",
        cover: "Angular2NotesForProfessionals.jpg",
        pdfUrl: "pdfs/Angular2NotesForProfessionals.pdf"
    },
    {
        id: 4,
        title: "AngularJS Notes for Professionals",
        category: "Angular",
        cover: "AngularJSNotesForProfessionals.jpg",
        pdfUrl: "pdfs/AngularJSNotesForProfessionals.pdf"
    },
    {
        id: 5,
        title: "Bash Notes for Professionals",
        category: "Bash",
        cover: "BashNotesForProfessionals.jpg",
        pdfUrl: "pdfs/BashNotesForProfessionals.pdf"
    },
    {
        id: 6,
        title: "C Notes for Professionals",
        category: "C",
        cover: "CNotesForProfessionals.jpg",
        pdfUrl: "pdfs/CNotesForProfessionals.pdf"
    },
    {
        id: 7,
        title: "C++ Notes for Professionals",
        category: "C++",
        cover: "CPlusPlusNotesForProfessionals.jpg",
        pdfUrl: "pdfs/CPlusPlusNotesForProfessionals.pdf"
    },
    {
        id: 8,
        title: "C# Notes for Professionals",
        category: "C#",
        cover: "CSharpNotesForProfessionals.jpg",
        pdfUrl: "pdfs/CSharpNotesForProfessionals.pdf"
    },
    {
        id: 9,
        title: "CSS Notes for Professionals",
        category: "CSS",
        cover: "CSSNotesForProfessionals.jpg",
        pdfUrl: "pdfs/CSSNotesForProfessionals.pdf"
    },
    {
        id: 10,
        title: ".NET Framework Notes for Professionals",
        category: ".NET",
        cover: "DotNETFrameworkNotesForProfessionals.jpg",
        pdfUrl: "pdfs/DotNETFrameworkNotesForProfessionals.pdf"
    },
    {
        id: 11,
        title: "Entity Framework Notes for Professionals",
        category: "Entity Framework",
        cover: "EntityFrameworkNotesForProfessionals.jpg",
        pdfUrl: "pdfs/EntityFrameworkNotesForProfessionals.pdf"
    },
    {
        id: 12,
        title: "Excel VBA Notes for Professionals",
        category: "Excel VBA",
        cover: "ExcelVBANotesForProfessionals.jpg",
        pdfUrl: "pdfs/ExcelVBANotesForProfessionals.pdf"
    },
    {
        id: 13,
        title: "Git Notes for Professionals",
        category: "Git",
        cover: "GitNotesForProfessionals.jpg",
        pdfUrl: "pdfs/GitNotesForProfessionals.pdf"
    },
    {
        id: 14,
        title: "Haskell Notes for Professionals",
        category: "Haskell",
        cover: "HaskellNotesForProfessionals.jpg",
        pdfUrl: "pdfs/HaskellNotesForProfessionals.pdf"
    },
    {
        id: 15,
        title: "Hibernate Notes for Professionals",
        category: "Hibernate",
        cover: "HibernateNotesForProfessionals.jpg",
        pdfUrl: "pdfs/HibernateNotesForProfessionals.pdf"
    },
    {
        id: 16,
        title: "HTML5 Canvas Notes for Professionals",
        category: "HTML5",
        cover: "HTML5CanvasNotesForProfessionals.jpg",
        pdfUrl: "pdfs/HTML5CanvasNotesForProfessionals.pdf"
    },
    {
        id: 17,
        title: "HTML5 Notes for Professionals",
        category: "HTML5",
        cover: "HTML5NotesForProfessionals.jpg",
        pdfUrl: "pdfs/HTML5NotesForProfessionals.pdf"
    },
    {
        id: 18,
        title: "iOS Notes for Professionals",
        category: "iOS",
        cover: "iOSNotesForProfessionals.jpg",
        pdfUrl: "pdfs/iOSNotesForProfessionals.pdf"
    },
    {
        id: 19,
        title: "Java Notes for Professionals",
        category: "Java",
        cover: "JavaNotesForProfessionals.jpg",
        pdfUrl: "pdfs/JavaNotesForProfessionals.pdf"
    },
    {
        id: 20,
        title: "JavaScript Notes for Professionals",
        category: "JavaScript",
        cover: "JavaScriptNotesForProfessionals.jpg",
        pdfUrl: "pdfs/JavaScriptNotesForProfessionals.pdf"
    },
    {
        id: 21,
        title: "jQuery Notes for Professionals",
        category: "jQuery",
        cover: "jQueryNotesForProfessionals.jpg",
        pdfUrl: "pdfs/jQueryNotesForProfessionals.pdf"
    },
    {
        id: 22,
        title: "Kotlin Notes for Professionals",
        category: "Kotlin",
        cover: "KotlinNotesForProfessionals.jpg",
        pdfUrl: "pdfs/KotlinNotesForProfessionals.pdf"
    },
    {
        id: 23,
        title: "LaTeX Notes for Professionals",
        category: "LaTeX",
        cover: "LaTeXNotesForProfessionals.jpg",
        pdfUrl: "pdfs/LaTeXNotesForProfessionals.pdf"
    },
    {
        id: 24,
        title: "Linux Notes for Professionals",
        category: "Linux",
        cover: "LinuxNotesForProfessionals.jpg",
        pdfUrl: "pdfs/LinuxNotesForProfessionals.pdf"
    },
    {
        id: 25,
        title: "MATLAB Notes for Professionals",
        category: "MATLAB",
        cover: "MATLABNotesForProfessionals.jpg",
        pdfUrl: "pdfs/MATLABNotesForProfessionals.pdf"
    },
    {
        id: 26,
        title: "Microsoft SQL Server Notes for Professionals",
        category: "SQL Server",
        cover: "MicrosoftSQLServerNotesForProfessionals.jpg",
        pdfUrl: "pdfs/MicrosoftSQLServerNotesForProfessionals.pdf"
    },
    {
        id: 27,
        title: "MongoDB Notes for Professionals",
        category: "MongoDB",
        cover: "MongoDBNotesForProfessionals.jpg",
        pdfUrl: "pdfs/MongoDBNotesForProfessionals.pdf"
    },
    {
        id: 28,
        title: "MySQL Notes for Professionals",
        category: "MySQL",
        cover: "MySQLNotesForProfessionals.jpg",
        pdfUrl: "pdfs/MySQLNotesForProfessionals.pdf"
    },
    {
        id: 29,
        title: "Node.js Notes for Professionals",
        category: "Node.js",
        cover: "NodeJSNotesForProfessionals.jpg",
        pdfUrl: "pdfs/NodeJSNotesForProfessionals.pdf"
    },
    {
        id: 30,
        title: "Objective-C Notes for Professionals",
        category: "Objective-C",
        cover: "ObjectiveCNotesForProfessionals.jpg",
        pdfUrl: "pdfs/ObjectiveCNotesForProfessionals.pdf"
    },
    {
        id: 31,
        title: "Oracle Database Notes for Professionals",
        category: "Oracle",
        cover: "OracleDatabaseNotesForProfessionals.jpg",
        pdfUrl: "pdfs/OracleDatabaseNotesForProfessionals.pdf"
    },
    {
        id: 32,
        title: "Perl Notes for Professionals",
        category: "Perl",
        cover: "PerlNotesForProfessionals.jpg",
        pdfUrl: "pdfs/PerlNotesForProfessionals.pdf"
    },
    {
        id: 33,
        title: "PHP Notes for Professionals",
        category: "PHP",
        cover: "PHPNotesForProfessionals.jpg",
        pdfUrl: "pdfs/PHPNotesForProfessionals.pdf"
    },
    {
        id: 34,
        title: "PostgreSQL Notes for Professionals",
        category: "PostgreSQL",
        cover: "PostgreSQLNotesForProfessionals.jpg",
        pdfUrl: "pdfs/PostgreSQLNotesForProfessionals.pdf"
    },
    {
        id: 35,
        title: "PowerShell Notes for Professionals",
        category: "PowerShell",
        cover: "PowerShellNotesForProfessionals.jpg",
        pdfUrl: "pdfs/PowerShellNotesForProfessionals.pdf"
    },
    {
        id: 36,
        title: "Python Notes for Professionals",
        category: "Python",
        cover: "PythonNotesForProfessionals.jpg",
        pdfUrl: "pdfs/PythonNotesForProfessionals.pdf"
    },
    {
        id: 37,
        title: "React.js Notes for Professionals",
        category: "React",
        cover: "ReactJSNotesForProfessionals.jpg",
        pdfUrl: "pdfs/ReactJSNotesForProfessionals.pdf"
    },
    {
        id: 38,
        title: "React Native Notes for Professionals",
        category: "React Native",
        cover: "ReactNativeNotesForProfessionals.jpg",
        pdfUrl: "pdfs/ReactNativeNotesForProfessionals.pdf"
    },
    {
        id: 39,
        title: "R Notes for Professionals",
        category: "R",
        cover: "RNotesForProfessionals.jpg",
        pdfUrl: "pdfs/RNotesForProfessionals.pdf"
    },
    {
        id: 40,
        title: "Ruby Notes for Professionals",
        category: "Ruby",
        cover: "RubyNotesForProfessionals.jpg",
        pdfUrl: "pdfs/RubyNotesForProfessionals.pdf"
    },
    {
        id: 41,
        title: "Ruby on Rails Notes for Professionals",
        category: "Ruby on Rails",
        cover: "RubyOnRailsNotesForProfessionals.jpg",
        pdfUrl: "pdfs/RubyOnRailsNotesForProfessionals.pdf"
    },
    {
        id: 42,
        title: "Spring Framework Notes for Professionals",
        category: "Spring",
        cover: "SpringFrameworkNotesForProfessionals.jpg",
        pdfUrl: "pdfs/SpringFrameworkNotesForProfessionals.pdf"
    },
    {
        id: 43,
        title: "SQL Notes for Professionals",
        category: "SQL",
        cover: "SQLNotesForProfessionals.jpg",
        pdfUrl: "pdfs/SQLNotesForProfessionals.pdf"
    },
    {
        id: 44,
        title: "Swift Notes for Professionals",
        category: "Swift",
        cover: "SwiftNotesForProfessionals.jpg",
        pdfUrl: "pdfs/SwiftNotesForProfessionals.pdf"
    },
    {
        id: 45,
        title: "TypeScript Notes for Professionals",
        category: "TypeScript",
        cover: "TypeScriptNotesForProfessionals.jpg",
        pdfUrl: "pdfs/TypeScriptNotesForProfessionals.pdf"
    },
    {
        id: 46,
        title: "VBA Notes for Professionals",
        category: "VBA",
        cover: "VBANotesForProfessionals.jpg",
        pdfUrl: "pdfs/VBANotesForProfessionals.pdf"
    },
    {
        id: 47,
        title: "Visual Basic .NET Notes for Professionals",
        category: "VB.NET",
        cover: "VisualBasic_NETNotesForProfessionals.jpg",
        pdfUrl: "pdfs/VisualBasic_NETNotesForProfessionals.pdf"
    },
    {
        id: 48,
        title: "Xamarin.Forms Notes for Professionals",
        category: "Xamarin",
        cover: "XamarinFormsNotesForProfessionals.jpg",
        pdfUrl: "pdfs/XamarinFormsNotesForProfessionals.pdf"
    }
];

// DOM Elements
const booksContainer = document.getElementById('books-container');
const categoriesList = document.getElementById('categories-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortAzBtn = document.getElementById('sort-az');
const sortZaBtn = document.getElementById('sort-za');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const modal = document.getElementById('book-modal');
const modalBookTitle = document.getElementById('modal-book-title');
const modalBookCover = document.getElementById('modal-book-cover');
const modalBookCategory = document.getElementById('modal-book-category');
const closeModal = document.querySelector('.close-modal');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageNum = document.getElementById('page-num');
const pageCount = document.getElementById('page-count');
const pdfCanvas = document.getElementById('pdf-canvas');

// PDF.js setup
const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// Current state
let currentBooks = [...books];
let currentCategory = 'all';
let currentSort = 'az';
let currentView = 'grid';
let pdfDoc = null;
let pageIsRendering = false;
let pageNumPending = null;
let currentPage = 1;
let scale = 1.5;

// Initialize the library
function initLibrary() {
    populateCategories();
    renderBooks();
    setupEventListeners();
}

// Populate categories from books data
function populateCategories() {
    const categories = ['all', ...new Set(books.map(book => book.category))].sort();
    
    categories.forEach(category => {
        if (category !== 'all') {
            const li = document.createElement('li');
            li.textContent = category;
            li.dataset.category = category;
            categoriesList.appendChild(li);
        }
    });
}

// Render books based on current filters and sort
function renderBooks() {
    // Filter books by category and search term
    let filteredBooks = [...books];
    
    if (currentCategory !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.category === currentCategory);
    }
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredBooks = filteredBooks.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort books
    filteredBooks.sort((a, b) => {
        if (currentSort === 'az') {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });
    
    // Update current books
    currentBooks = filteredBooks;
    
    // Clear container
    booksContainer.innerHTML = '';
    
    // Add books to container
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.dataset.id = book.id;
        
        // Use placeholder images if actual covers aren't available
        const coverSrc = book.cover || `https://via.placeholder.com/200x300?text=${encodeURIComponent(book.title)}`;
        
        bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${coverSrc}" alt="${book.title}">
                <div class="book-category-tag">${book.category}</div>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
            </div>
        `;
        
        booksContainer.appendChild(bookCard);
    });
}

// PDF rendering functions
function renderPage(num) {
    pageIsRendering = true;
    
    // Update UI
    pageNum.textContent = num;
    
    // Get page
    pdfDoc.getPage(num).then(page => {
        // Set scale
        const viewport = page.getViewport({ scale });
        pdfCanvas.height = viewport.height;
        pdfCanvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: pdfCanvas.getContext('2d'),
            viewport
        };
        
        page.render(renderContext).promise.then(() => {
            pageIsRendering = false;
            
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
    
    // Update page controls
    prevPageBtn.disabled = num <= 1;
    nextPageBtn.disabled = num >= pdfDoc.numPages;
}

function queueRenderPage(num) {
    if (pageIsRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Category selection
    categoriesList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            // Update active category
            document.querySelector('#categories-list li.active')?.classList.remove('active');
            e.target.classList.add('active');
            
            // Update current category and render books
            currentCategory = e.target.dataset.category;
            renderBooks();
        }
    });
    
    // Search
    searchBtn.addEventListener('click', () => {
        renderBooks();
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            renderBooks();
        }
    });
    
    // Sorting
    sortAzBtn.addEventListener('click', () => {
        sortAzBtn.classList.add('active');
        sortZaBtn.classList.remove('active');
        currentSort = 'az';
        renderBooks();
    });
    
    sortZaBtn.addEventListener('click', () => {
        sortZaBtn.classList.add('active');
        sortAzBtn.classList.remove('active');
        currentSort = 'za';
        renderBooks();
    });
    
    // View toggle
    gridViewBtn.addEventListener('click', () => {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        booksContainer.className = 'books-container grid-view';
        currentView = 'grid';
    });
    
    listViewBtn.addEventListener('click', () => {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        booksContainer.className = 'books-container list-view';
        currentView = 'list';
    });
    
    // Menu toggle for mobile
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // Book selection
    booksContainer.addEventListener('click', (e) => {
        const bookCard = e.target.closest('.book-card');
        if (bookCard) {
            const bookId = parseInt(bookCard.dataset.id);
            openBook(bookId);
        }
    });
    
    // PDF navigation
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            queueRenderPage(currentPage);
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        if (currentPage < pdfDoc.numPages) {
            currentPage++;
            queueRenderPage(currentPage);
        }
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        pdfDoc = null;
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            pdfDoc = null;
        }
    });
}

// Open book in modal
// script.js (updated openBook function)
function openBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        // Open PDF in new tab
        window.open(book.pdfUrl, '_blank');
    }
}

// Initialize the library when DOM is loaded
document.addEventListener('DOMContentLoaded', initLibrary);

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});