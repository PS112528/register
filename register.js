// เมื่อผู้ใช้คลิกปุ่ม Submit
document.getElementById('form').addEventListener('submit', function(event) {
    
    
    event.preventDefault(); // หยุดการรีเฟรชหน้าเมื่อ submit
    
    // ดึงข้อมูลจากฟอร์ม
    const employee = document.getElementById('input1').value;
    const firstname = document.getElementById('input2').value;
    const lastname = document.getElementById('input3').value;
  
    // บันทึกข้อมูลใน localStorage หรือส่งผ่าน URL เพื่อไปที่ map.html
    localStorage.setItem('employee', employee);
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
  
    // เปลี่ยนหน้าไปที่ map.html
    window.location.href = 'map.html';
  });