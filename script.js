// Suggestions Simulation
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const suggestionsBox = document.getElementById('suggestions-box'); // Updated ID
const suggestions = ['Search 1', 'Search 2', 'Search 3', 'Search 4', 'Search 5'];

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = '';
    
    if (query) {
        suggestionsBox.style.display = 'block';
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));
        
        if (filteredSuggestions.length) {
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion');
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    suggestionsBox.style.display = 'none';
                });
                suggestionsBox.appendChild(suggestionItem);
            });
        } else {
            suggestionsBox.style.display = 'none';
        }
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Redirect to Google Search Button Action
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        // Redirect to Google Search with the query
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search query');
    }
});

// Enter Key Press Simulation
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action (form submission, if any)
        searchBtn.click(); // Trigger a click on the search button
    }
});
