class Rectangle
{
    constructor(w, h)
    {
        this.width = w;
        this.height = h;
    }
    
    area()
    {
        return this.width * this.height;
    }
}

// Пример использования:
const rect1 = new Rectangle(5, 6);
console.log(rect1.area()) // должен вернуть 30

