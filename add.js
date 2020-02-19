
class Element {
	constructor(img,date,pname,prname,desc,next = null,prev = null){
		    this.img=img;
        this.date=date;
        this.pname=pname;
        this.prname=prname;
        this.desc=desc;
        this.next=next;
        this.prev=prev;
	}
}

class Stack {
  constructor()
  {
		this.length=0;
		this.head=null;
		this.tail=null;
		this.pointer = null;

	}
  addFirst(img,date,pname,prname,desc)
  {
    if (this.head==null) 
    {
			this.head=this.tail=this.pointer=new Element(img,date,pname,prname,desc);
		}
    else 
    {
			let tmp = this.head;
			this.head = new Element(img,date,pname,prname,desc);
			tmp.prev = this.head;
			this.head.next = tmp;

		}
}
dispElement(){
  if(this.head){
    return "<div class='part'>" +"<div>" +"<img  src =" + this.head.img + ">" + "</div>" + "<h5 align='left'>"+ this.head.date + 
    "<h1 align='left'>" + this.head.pname + "</h1>" +  "<div>" +   "<h4 align='left'>" + this.head.prname + "</h4>" + "</div>" + "<p>" + this.head.desc + "</p>"
    + "</div>";;
  } else return "No Data";
}
}
let stack = new Stack();
function submit() {

stack.addFirst(document.getElementById("images").value,document.getElementById("date").value,document.getElementById("podcasters").value,document.getElementById("podcasts").value,document.getElementById("desc").value);
var par = document.getElementById("container");
       par.innerHTML += stack.dispElement();
}





