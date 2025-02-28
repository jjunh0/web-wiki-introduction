console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.querySelector('.comment-list');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText) {
            addComment(commentText);
            commentInput.value = '';
            alert('댓글이 등록되었습니다');
        }
    });

    function addComment(text) {
        const li = document.createElement('li');
        li.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${text}</div>
      </div>
    `;
        commentList.appendChild(li);
    }
});
