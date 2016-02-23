/**
 * Created by Vasiliy on 1/6/2016.
 */
function Ball(x, y, w, h, route, field)
{
    var commonFunctionObj = new CommonFunctionObj();
    var collisions = new Collisions();

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.route = route;
    this.img = new Image();
    this.img.src = BALL_ADDRESS;
    this.move = function()
    {
        var stepX = commonFunctionObj.getXDirect(this.route);
        var stepY = commonFunctionObj.getYDirect(this.route);
        this.x += stepX * BALL_SPEED;
        this.y += stepY * BALL_SPEED;
        var damagedPlayer = collisions.getIntersectedObj(this, field.players);
        if (damagedPlayer != null)
        {
            field.bangs[field.bangs.length] = new Bang(this.x, this.y, field);
            console.log(1);
            field.eventController.dispatch("tankDamaged", this);
            return 1;
        }
        var barricade = collisions.getIntersectedObj(this, field.barricades);
        if (barricade != null)
        {
            field.bangs[field.bangs.length] = new Bang(this.x, this.y, field);
            return 1;
        }
        var damagedBalls = collisions.getIntersectedObj(this, field.balls);
        if (damagedBalls != null)
        {
            field.bangs[field.bangs.length] = new Bang((this.x + damagedBalls.x) / 2, (this.y + damagedBalls.y) / 2, field);
            field.balls.splice(commonFunctionObj.findElement(damagedBalls.x, damagedBalls.y, field.balls));
            return 1;
        }
        return 0;
    };

    this.draw = function()
    {
        commonFunctionObj.drawRotatedObj(commonFunctionObj.translateCharInRightDeg(this.route), this.img,
                                         this.x, this.y, this.width, this.height, 0);
    };
}