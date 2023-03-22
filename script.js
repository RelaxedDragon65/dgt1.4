function toggleStyles() {
    var style1 = document.getElementById('style1');
    var style2 = document.getElementById('style2');
   
    if (style1.disabled) {
      style1.disabled = false;
      style2.disabled = true;
    } else {
      style1.disabled = true;
      style2.disabled = false;
    }
  }