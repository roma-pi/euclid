document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-work__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      document.querySelectorAll('.section-work__btn').forEach(function(tabContent) {
        tabContent.classList.remove('section-work__btn_active')
      })
      event.currentTarget.classList.add('section-work__btn_active')

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-work__step').forEach(function(tabContent) {
        tabContent.classList.remove('section-work__step_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-work__step_active')
    })
  })
})
