
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
class Element{
  constructor(duree,date,namepi,descepi,linkaudio,tags,invites, next, previous){
    this.duree=duree;
    this.date=date;
    this.namepi=namepi;
    this.descepi=descepi;
    this.linkaudio=linkaudio;
    this.tags=tags;
    this.invites=invites;
    this.next = next || null;
    this.previous = previous || null;
  }
}
class Queue{
  constructor(){
      this.pointer = this.holder = this.bottom = new Element("1h:41min:42sec","dFev 12 2020 12:00 AM","LIVE in Denver with Johnny Pemberton","David Lucas, comedian and host of Brothers in Cursive, joins the DTFH! This episode is brought to you by:","1.mp3","#Comedianplace","Doland Tramp" , "Sam louis");;
  }
  queue(duree,date,namepi,descepi,linkaudio,tags,invites){
      // if(!this.bottom){
      //     this.pointer = this.holder = this.bottom = new Element(duree,date,namepi,descepi,linkaudio,tags,invites,);
      //     return;
      // }
      let temp = this.holder;
      this.holder = this.holder.next = new Element(duree,date,namepi,descepi,linkaudio,tags,invites,);
      this.holder.previous = temp;
  }

  dequeue(){
      if(this.pointer && this.pointer === this.bottom){
          this.pointer = this.bottom.next;
      }
      if(this.bottom && this.bottom.next){
          this.bottom = this.bottom.next;
          this.bottom.previous = null;
      }else{
          this.pointer = this.holder = this.bottom = null;
      }
  }
  next(){
      if(this.pointer && this.pointer.next){
          this.pointer = this.pointer.next;
      }
  }
  previous(){
      if(this.pointer && this.pointer.previous){
          this.pointer = this.pointer.previous;
      }
  }
  show(){
      if(this.pointer){
        
              document.getElementById("duree").innerHTML = this.pointer.duree;
              document.getElementById("date").innerHTML = this.pointer.date;
              document.getElementById("nameip").innerHTML = this.pointer.namepi;
              document.getElementById("desc").innerHTML = this.pointer.descepi;
               document.getElementById("myaudio").src = this.pointer.linkaudio;
              // document.getElementById("audio").innerHTML = this.pointer.linkaudio;
              document.getElementById("hach").innerHTML = this.pointer.tags;
              document.getElementById("celb").innerHTML = this.pointer.invites;
          
      }
     
  }
}

  



let qu = new Queue();

function queue(){
  let d = Date(Date.now()); 
  qu.queue(document.getElementById('dure').value,d.toString(),document.getElementById('name').value,
  document.getElementById('descr').value,document.getElementById('link').value,document.getElementById('tags').value,document.getElementById('guest').value);
  
  qu.show();
}

function next(){
  qu.next();
   qu.show();
}

function previous(){
  qu.previous();
  qu.show();
}