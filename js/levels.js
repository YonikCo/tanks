/**
 * Created by Vasily on 14.09.2015.
 */
//"b" - непроходимое препятствие
//"0" - ничего
//"y" - игрок
//"e" - обычный враг
//"a" - бронированный враг
//"s" - быстрый враг
//"f" - снаряд
//"r" - проходимая преграда
var g_levels = [[]];
g_levels[0] = [
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "0", "0", "b", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "y", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "b", "r", "b", "r", "b", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "r", "0", "0", "0", "r", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "0", "0", "b", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "r", "0", "0", "0", "r", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "b", "r", "b", "r", "b", "0", "0", "0", "b"],
    ["b", "b", "b" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "s", "b" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "b" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "r" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
];

g_levels[1] = [
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "0", "b"],
    ["b", "r", "0" ,"0", "0", "0", "b", "0", "0", "0", "0", "0", "0", "s", "0", "0", "b", "0", "a", "b"],
    ["b", "0", "r" ,"r", "0", "b", "b", "0", "r", "r", "b", "0", "0", "0", "b", "0", "b", "0", "0", "b"],
    ["b", "s", "0" ,"b", "0", "0", "0", "s", "0", "0", "b", "0", "0", "b", "b", "0", "b", "0", "0", "b"],
    ["b", "0", "b" ,"b", "0", "0", "b", "0", "0", "0", "b", "0", "0", "b", "0", "0", "b", "0", "0", "b"],
    ["b", "0", "b" ,"0", "0", "0", "b", "0", "0", "0", "b", "0", "0", "b", "0", "0", "b", "s", "0", "b"],
    ["b", "0", "b" ,"0", "r", "r", "b", "0", "0", "0", "b", "0", "0", "b", "b", "b", "b", "0", "0", "b"],
    ["b", "0", "b" ,"0", "r", "y", "b", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "b" ,"b", "b", "0", "b", "0", "0", "0", "0", "0", "0", "b", "b", "b", "b", "b", "0", "b"],
    ["b", "0", "0" ,"0", "r", "0", "r", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
];

g_levels[2] = [
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "0", "0", "r", "0", "0", "0", "0", "0", "r", "0", "0", "0", "b"],
    ["b", "0", "y" ,"r", "0", "0", "0", "0", "0", "r", "0", "0", "0", "b"],
    ["b", "0", "0" ,"r", "0", "0", "0", "0", "e", "r", "0", "0", "0", "b"],
    ["b", "r", "r" ,"r", "0", "0", "0", "0", "0", "r", "0", "0", "0", "b"],
    ["b", "0", "0" ,"r", "r", "0", "0", "0", "0", "r", "0", "0", "0", "b"],
    ["b", "0", "e" ,"0", "0", "0", "0", "0", "0", "r", "0", "0", "s", "b"],
    ["b", "0", "0" ,"0", "0", "s", "0", "0", "0", "r", "r", "0", "b", "b"],
    ["b", "0", "r" ,"r", "r", "b", "b", "b", "0", "0", "r", "e", "0", "b"],
    ["b", "s", "0" ,"0", "0", "b", "0", "0", "0", "0", "r", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "b", "a", "0", "0", "0", "r", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "b", "0", "0", "0", "0", "r", "0", "0", "b"],
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
];

g_levels[3] = [
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "y", "r" ,"0", "0", "r", "s", "0", "0", "b", "0", "0", "b", "b", "0", "a", "b", "0", "0", "b"],
    ["b", "0", "b" ,"a", "0", "r", "0", "0", "r", "b", "0", "e", "b", "0", "0", "0", "0", "0", "a", "b"],
    ["b", "0", "r" ,"0", "0", "r", "0", "0", "0", "0", "0", "0", "r", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "b" ,"0", "0", "r", "0", "0", "0", "0", "0", "0", "r", "0", "0", "0", "0", "0", "s", "b"],
    ["b", "0", "r" ,"0", "0", "r", "0", "0", "0", "a", "0", "0", "r", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
];


g_levels[4] = [
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "y", "r" ,"0", "0", "r", "a", "0", "0", "b", "0", "0", "b", "b", "0", "a", "0", "a", "0", "b"],
    ["b", "0", "r" ,"0", "0", "r", "0", "0", "0", "b", "0", "0", "b", "b", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "r" ,"0", "0", "r", "r", "r", "r", "b", "0", "0", "b", "b", "0", "0", "b", "0", "0", "b"],
    ["b", "0", "r" ,"0", "0", "r", "r", "r", "r", "b", "0", "0", "b", "b", "0", "0", "b", "0", "0", "b"],
    ["b", "0", "b" ,"a", "0", "b", "r", "r", "r", "b", "0", "e", "b", "r", "0", "0", "s", "0", "0", "b"],
    ["b", "0", "r" ,"0", "0", "b", "r", "r", "r", "r", "0", "0", "r", "r", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "b" ,"0", "0", "b", "r", "r", "r", "r", "0", "0", "r", "r", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "r" ,"0", "0", "b", "r", "r", "r", "r", "a", "0", "r", "r", "0", "s", "0", "0", "0", "b"],
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
];