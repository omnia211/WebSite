// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault(); // لمنع الإرسال الفوري للنموذج
//     alert('Your form has been submitted successfully!');
//     // يمكنك بعد ذلك السماح بإرسال النموذج:
//     // event.target.submit();
// });


// Display Today's Date Script
document.querySelector('#showDateButton').addEventListener('click', function () {
    // الحصول على التاريخ الحالي
    let today = new Date();
    let date = today.toDateString(); // تحويل التاريخ إلى نص
    // عرض التاريخ في الفقرة
    document.querySelector('#dateDisplay').textContent = `Today's date is: ${date}`;
});

