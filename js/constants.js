/**
 * Created by Vasiliy on 9/30/2015.
 */
var SQUARE_SIZE = 2 * 3 * 5 * 2;

var TOWER_LEFT = 37;
var TOWER_UP = 38;
var TOWER_RIGHT = 39;
var TOWER_DOWN = 40;

var FIRE = 32;
var LEFT = 65;
var UP = 87;
var RIGHT = 68;
var DOWN = 83;

var LEFT_CHAR = "l";
var DOWN_CHAR = "d";
var RIGHT_CHAR = "r";
var UP_CHAR = "u";

var RANDOM_LEVEL_CHAR = "r";
var PLAYER_CHAR = "y";
var ENEMY_CHAR = "e";
var SPRINT_ENEMY_CHAR = "s";
var ARMOR_ENEMY_CHAR = "a";
var BARRICADE_CHAR = "b";
var NOTHING_CHAR = "0";
var TRAVELED_BARRICADE_CHAR = "r";

var SHADOW_LEVEL = 43;

var MAX_FIELD_LENGTH = 15;
var MIN_FIELD_LENGTH = 10;
var MAX_ENEMY_COUNT = 7;
var MIN_ENEMY_COUNT = 3;
var BARRICADE_COUNT = 80;

var BANG_SOUND_ADDRESS = "./sounds/bang.mp3";

var HEALTH_BONUS_ADDRESS = "./img/bonus/health.png";
var SPEED_BONUS_ADDRESS = "./img/bonus/speed.png";
var TOWER_SPEED_BONUS_ADDRESS = "./img/bonus/tower_rotate_bonus.png";
var FIRE_SPEED_BONUS_ADDRESS = "./img/bonus/fire_speed_bonus.png";
var BANG_ADDRESS = "./img/spark.png";
var SMOKE_ADDRESS = "./img/smoke.png";
var DUST_ADDRESS = "./img/dust.png";
var BALL_ADDRESS = "./img/ball.png";
var BARRICADE_ADDRESS = "./img/barricade.png";
var TRAVELED_BARRICADE_ADDRESS = "./img/traveld_barricade.png";
var HEALTH_ADDRES = "./img/health.png";
var RESULT_SCREEN_ADDRESS = "result_screen.html";
var START_SCREEN_ADDRESS = "start_screen.html";
var SHADOW_ADDRESS = "img/shadow.png";
var PLAY_BUTTON_ADDRESS = "img/next_button.png";
var PLAY_BUTTON_ADDRESS_HOVER = "img/next_button_hover.png";
var PLAY_BUTTON_ADDRESS_CLICK = "img/next_button_click.png";
var PAUSE_BUTTON_ADDRESS = "img/pause_button.png";
var PAUSE_BUTTON_ADDRESS_HOVER = "img/pause_button_hover.png";
var PAUSE_BUTTON_ADDRESS_CLICK = "img/pause_button_click.png";

var FPS = 30;
var DELAY = 1000 / FPS;
var MAX_VISIBLE_HEALTH = 3;
var LAST_X_SMOKE_STATE = 7;
var LAST_Y_SMOKE_STATE = 4;
var LAST_X_DUST_STATE = 2;
var LAST_Y_DUST_STATE = 2;
var BALL_SPEED = SQUARE_SIZE / 1.22;
var SMOKE_COUNT = 2;
var DUST_COUNT = 60;
var BONUS_TIME = 1000000;
var MAX_BONUS_COUNT = 10;

//rotateTowerSpeed делитель 90
var PLAYER_CONSTS = {
    towerImgAddres: "img/tower_p.png",
    bodyImageAddres: "img/body_p.png",
    rotateTowerSpeed: 9,
    speedNormal: 4,
    speedPatrol: 4,
    health: 5,
    reloadingTime: 40,
    foundRadius: 10
};

var ENEMY_CONSTS = {
    towerImgAddres: "img/tower_e.png",
    bodyImageAddres: "img/tank_body.png",
    rotateTowerSpeed: 6,
    speedNormal: 3,
    speedPatrol: 3,
    health: 4,
    reloadingTime: 47,
    foundRadius: 10
};

var SPRINT_ENEMY_CONSTS = {
    towerImgAddres: "img/tower_e.png",
    bodyImageAddres: "img/speed_body.png",
    rotateTowerSpeed: 6,
    speedNormal: 4,
    speedPatrol: 4,
    health: 3,
    reloadingTime: 40,
    foundRadius: 10
};

var ARMOR_ENEMY_CONSTS = {
    towerImgAddres: "img/tower_e.png",
    bodyImageAddres: "img/tank_body.png",
    rotateTowerSpeed: 5,
    speedNormal: 1,
    speedPatrol: 1,
    health: 5,
    reloadingTime: 50,
    foundRadius: 12
};
