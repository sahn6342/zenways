var str = "shas skdjfh lklkd ldsfdfsl lljdsfla dsfdf";
var spl = function (strr) {
    return strr.split(" ");
};
var strArr = spl(str);
for (var i = 0; i < strArr.length; i++) {
    console.log(strArr[i][0]);
}
