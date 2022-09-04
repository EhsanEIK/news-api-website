const loadNews = (searchText) => {
    const url = `https://newsapi.org/v2/everything?q=${searchText}&from=2022-08-04&sortBy=publishedAt&language=en&apiKey=73e7bb2dee5942d698b5189787b82e7f`;
    fetch(url)
        .then(res => res.json())
        .then(data => showNews(data.articles));
}
const showNews = datas => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    datas.forEach(news => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${news.urlToImage ? news.urlToImage : 'No Data Available'}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${news.title ? news.title : 'No Data Available'}</h5>
                <p class="card-text">
                <p>Content: ${news.content ? news.content : 'No Data Available'}</p>
                <p>Author: ${news.author ? news.author : 'No Data Available'}</p>
                <p>Published Date: ${news.publishedAt ? news.publishedAt : 'No Data Available'}</p>
                <p>Source: ${news.source.name ? news.source.name : 'No Data Available'}</p>
                <a href="${news.url ? news.url : 'No Data Available'}">Link</a>
                <p>${news.description ? news.description : 'No Data Available'}</p>
                </p>
            </div>
        </div>
        `;
        newsContainer.appendChild(div);
    });
}
loadNews('tesla');

document.getElementById('btn-search').addEventListener('click', function () {
    const searchInputField = document.getElementById('search-input-field');
    const searchValue = searchInputField.value;
    const newsTitle = document.getElementById('news-title');
    newsTitle.innerText = `: ${searchValue.toUpperCase()}`;
    loadNews(searchValue);
})