/**
 * Created by Administrator on 2020/12/22.
 */
window.onload = function(){
    var box=this.document.getElementsByClassName("re")[0];
    var lik=box.getElementsByTagName("li");
    function fun(i,j){//ת��ͼƬ���������ǰ�͸���ȸ���һ��
        lik[i].style.opacity=1;
        lik[j].style.opacity=0;
//            lik[i+5].style.backgroundColor="#ffffff";//��һ��Сͼ��
//            lik[j+5].style.backgroundColor="#00000000"
    }
    fun(0,1);//��ʼ����
    var i =0;
    function auto(){//�ֲ�ѭ������
        if(++i>=5){
            i=0;
            fun(0,4);
        }
        else fun(i,i-1);
    }
    timer=this.setInterval(auto,4000);
    box.onmouseover = function () { //��껮��ȥ��ֹͣ�ֲ�
        console.log('good');
        clearInterval(timer);
    }
    box.onmouseout = function () { //��껮���������ֲ�
        timer = setInterval(auto, 4000); //���ö�ʱ��
    }
    var j =0;
    for(;j<5;j++){//���Сͼ��Ҳ����ת��ͼƬ
        lik[j+5].ind=j;
        lik[j+5].onclick=function(){
            fun(this.ind,i)
            i=this.ind;
        }
    }

}