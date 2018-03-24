
var question =[ 
ques_1={content: 'Tên bài hát bạn đang nghe có tên là gì?', A: 'Vỡ', B: 'Cùng anh', C: 'Buồn của anh', D: 'Đừng xin lỗi nữa', right_ans='Buồn của anh'},
ques_2={content: 'Tên bài hát bạn đang nghe có tên là gì?', A: 'Cùng anh', B: 'Em ngày xưa khác rồi', C: 'Buồn của anh', D: 'Đừng xin lỗi nữa', right_ans='Cùng anh'},
ques_3={content: 'Tên bài hát bạn đang nghe có tên là gì?', A: 'Cùng anh', B: 'Em ngày xưa khác rồi', C: 'Đừng ai nhắc về anh ấy', D: 'Đừng xin lỗi nữa', right_ans='Đừng ai nhắc về anh ấy'},
ques_4={content: 'Tên bài hát bạn đang nghe có tên là gì?', A: 'Buồn của anh', B: 'Em ngày xưa khác rồi', C: 'Buồn của anh', D: 'Đừng xin lỗi nữa', right_ans='Đừng xin lỗi nữa'},
ques_5={content: 'Tên bài hát bạn đang nghe có tên là gì?', A: 'Cùng anh', B: 'Em ngày xưa khác rồi', C: 'Buồn của anh', D: 'Đừng xin lỗi nữa', right_ans='Em ngày xưa khác rồi'},
ques_6={content: 'Tên bài hát bạn đang nghe có tên là gì?', A: 'Cùng anh', B: 'Em ngày xưa khác rồi', C: 'Buồn của anh', D: 'Vỡ', right_ans='Vỡ'},

];

function trans_quizpage(){
	window.location.href = 'Quiz.html'
};

function back_color(){
	for(var i = 1; i <=4; i++)
	{
		document.getElementById("ans"+i).style.backgroundColor = "#616161";
	}
}

var score = 0;
function choise_color(a) {
	back_color();
	a.style.backgroundColor = "red";

	for (var i = 0; i< question.length; i++) 
	{
		if (a.value == question[i].right_ans)
		{
			score += 1;
		}
	}
	return score;
}

document.getElementById("ques_index").value = question[0].content;
document.getElementById("ans_1").value = question[0].A;
document.getElementById("ans_2").value = question[0].B;
document.getElementById("ans_3").value = question[0].C;
document.getElementById("ans_4").value = question[0].D;
