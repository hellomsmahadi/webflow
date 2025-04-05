<script>
window.fsAttributes = window.fsAttributes || [];
fsAttributes.push({
  name: 'filter',
  on: {
    // ফিল্টার এপ্লাই/রিসেট হলে এই ফাংশন কল হবে
    filter: function (payload) {
      const clearBtn = document.querySelector('.filter_radio-button-field.is-blog');
      // যদি কোনো ফিল্টার নাই (payload.filters empty) → clear active
      if (!payload.filters || payload.filters.length === 0) {
        clearBtn.classList.add('is-active');
      } else {
        clearBtn.classList.remove('is-active');
      }
    }
  }
});

// সাথে এইটাও রাখো, যাতে Clear বাটন ক্লিকেই সব রেডিও রিসেট + active
document.addEventListener('DOMContentLoaded', function () {
  const clearBtn = document.querySelector('.filter_radio-button-field.is-blog');
  clearBtn.addEventListener('click', () => {
    // Finsweet রিসেট ট্রিগার করে, তারপর ইভেন্টে clear active হবে
    clearBtn.classList.add('is-active');
  });
});
</script>
