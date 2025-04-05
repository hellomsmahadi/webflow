<script>
document.addEventListener('DOMContentLoaded', function () {
  const radios = document.querySelectorAll('.filter_radio-button-field');
  const clearBtn = document.querySelector('.filter_radio-button-field.is-blog');

  // শুরুতেই clear বাটনে active
  clearBtn.classList.add('is-active');

  // Clear এ ক্লিক
  clearBtn.addEventListener('click', () => {
    // একটু ডিলে দিয়ে রেডিও থেকে ক্লাস রিমুভ + clear এ আবার add
    setTimeout(() => {
      radios.forEach(r => r.classList.remove('is-active'));
      clearBtn.classList.add('is-active');
    }, 0);
  });

  // প্রতিটি রেডিওতে ক্লিক
  radios.forEach(r => {
    r.addEventListener('click', () => {
      clearBtn.classList.remove('is-active');
    });
  });
});
</script>
