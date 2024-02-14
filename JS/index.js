const username_submit = (event)=>{
      event.preventDefault();

      const username = document.getElementById('username').value;
      if(username.length<5){
            alert('Username must be at least 5 characters');
            return;
      }
      alert("You are ready");


      document.getElementById("user").innerHTML = username;

      document.getElementById("username_div").style.display = 'none';
      document.getElementById("game_div").style.display = 'block';
};

const start_game = (side) => {

      document.getElementById("result").style.display = 'none';
      document.getElementById("flipping").style.display = 'block';

      
      
      setTimeout(() => {
      get_results(side);
      document.getElementById("flipping").style.display = 'none';
      document.getElementById("result").style.display = 'block';

      },2000)
};

const get_results = (side) => {
      const coin_side = Math.floor(Math.random() *(2-1+1)+1);

      let flip_side = " ";
      if(coin_side === 1){
            flip_side = "Head";
      }else{
            flip_side = "Tail";
      }

      document.getElementById('result').innerHTML = flip_side;


      if(coin_side === 1){
            if(side === "head"){
                  won();
            }
            else{
                lost(); 
            }

      }else{

            if(side === "tail"){
                  won();
            }else{
                  lost();
            }
      }
};

const won = () => {
      setTimeout(()=>{
            alert("You win!!");
      },1000);
}
const lost = () => {
      setTimeout(()=>{
            alert("You loose!!");

      },1000);
};