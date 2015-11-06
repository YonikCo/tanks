/**
 * Created by Vasily on 14.09.2015.
 */
//"b" - ������������ �����������
//"0" - ������
//"y" - �����
//"e" - ������� ����
//"a" - ������������� ����
//"s" - ������� ����
//"f" - ������
//"r" - ���������� ��������
var g_levels = [[], []];
g_levels[0] = [
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "0", "0", "r", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "s", "0", "b"],
    ["b", "0", "r" ,"r", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "r" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "r", "r" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "b", "b", "b", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "b", "y", "b", "0", "0", "0", "0", "0", "b", "0", "b", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "r", "0", "r", "0", "0", "0", "0", "b", "b", "0", "b", "0", "0", "0", "0", "b"],
    ["b", "r", "b" ,"0", "r", "r", "r", "0", "0", "0", "0", "b", "0", "0", "b", "0", "0", "0", "0", "b"],
    ["b", "0", "b" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "b" ,"b", "b", "b", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "r", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
];

g_levels[1] = [
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "s", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "0", "b"],
    ["b", "r", "r" ,"0", "0", "0", "b", "r", "r", "r", "b", "0", "0", "0", "b", "0", "b", "0", "0", "b"],
    ["b", "0", "b" ,"0", "0", "0", "b", "s", "0", "0", "b", "0", "0", "b", "b", "0", "b", "0", "0", "b"],
    ["b", "0", "b" ,"0", "0", "0", "b", "0", "0", "0", "b", "0", "0", "b", "0", "0", "b", "0", "0", "b"],
    ["b", "0", "b" ,"0", "0", "0", "b", "0", "0", "0", "b", "0", "0", "b", "e", "0", "b", "0", "0", "b"],
    ["b", "0", "b" ,"0", "b", "b", "b", "0", "0", "0", "b", "0", "0", "b", "b", "b", "b", "0", "0", "b"],
    ["b", "0", "b" ,"0", "b", "y", "b", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "b" ,"b", "b", "0", "b", "0", "0", "0", "0", "0", "0", "b", "b", "b", "b", "b", "0", "b"],
    ["b", "a", "0" ,"0", "r", "0", "r", "0", "0", "e", "0", "0", "0", "0", "0", "0", "0", "0", "a", "b"],
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
];

g_levels[2] = [
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "y", "b", "0", "0", "0", "0", "0", "s", "0", "0", "0", "0", "b", "b", "b", "0", "0", "s", "b"],
    ["b", "0", "b" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "e", "b", "0", "0", "0", "b"],
    ["b", "r", "r" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "b", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "b", "b", "0", "0", "0", "0", "b", "s", "b", "b", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "b", "s", "0", "0", "0", "b", "b", "b", "b", "b", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "b", "b", "b", "0", "0", "b", "e", "0", "0", "b", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "b", "b", "e", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "b", "a", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "b"],
    ["b", "0", "0" ,"0", "0", "r", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "s", "b"],
    ["b", "b", "b" ,"b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
];