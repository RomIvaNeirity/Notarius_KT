function renderStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += i < rating ? "★" : "☆";
  }
  return stars;
}

fetch("/reviews.php") // шлях до PHP-скрипта
  .then(res => res.json())
  .then(reviews => {
    if (!reviews || reviews.length === 0) {
      document.getElementById("google-reviews").innerHTML =
        "<p>Відгуки відсутні</p>";
      return;
    }

    let html = "<h3>Відгуки Google</h3>";
    reviews.forEach(r => {
      html += `
        <div class="review-card">
          <div class="review-author">${r.author_name}</div>
          <div class="review-rating">${renderStars(r.rating)} (${r.rating})</div>
          <div class="review-text">${r.text}</div>
        </div>
      `;
    });
    document.getElementById("google-reviews").innerHTML = html;
  })
  .catch(() => {
    document.getElementById("google-reviews").innerHTML =
      "<p>Не вдалося завантажити відгуки</p>";
  });