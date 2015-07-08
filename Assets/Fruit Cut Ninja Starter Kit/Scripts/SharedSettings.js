//Global parameters - can be accesed even from different scene (menu etc)

#pragma strict

//time of game
static var ConfigTime : int = 360;

//respiration value
static var maxRR : float = 24.0f;
static var transitRR : float = 18.0f;
static var targetRR : float = 12.0f;

//score
static var bonus : int = 30;
static var fruit : int = 5;
static var junk : int = 10;


static var Menu : int = 0;
static var NEBF_Direct : int = 1; 
static var NEBF_Indirect : int = 2;
static var NE_Control : int = 3;
static var BF_Only : int = 4;
static var loadedLevel : int = Menu;


static var conditions : String[] = ["Menu", "NEGBF_Direct", "NEGBF_Indirect", "NE_Control", "BF_Only"];
static var ioWriter : StreamWriter;

static function writeLog(opt: String, val: String){
	var t: System.DateTime = System.DateTime.Now;
    var time : String = String.Format("{0:D2}:{1:D2}:{2:D2}:{3:D3}", t.Hour, t.Minute, t.Second, t.Millisecond);
	this.ioWriter.WriteLine(opt + "    " + val + "    " + time);
    this.ioWriter.Flush();
}
