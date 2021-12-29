class Temperature
{
    constructor(temperature)
    {
        this.temperature = temperature;
    }
    
    get celsius()
    {
        return this.temperature;
    }
    
    get fahrenheit()
    {
        return Temperature.toFahrenheit(this.temperature);
    }

    set celsius(temperature)
    {
        this.temperature = temperature;
    }
    
    set fahrenheit(temperature)
    {
        this.temperature = Temperature.fromFahrenheit(temperature);
    }
    
    static fromFahrenheit(temperature)
    {
        return Math.round((temperature - 32) * 5 / 9);
    }

    static toFahrenheit(temperature)
    {
        return Math.round((temperature * 9 / 5) + 32);
    }
}

const day1 = new Temperature(25);
console.log(day1.celsius);
console.log(day1.fahrenheit);

day1.celsius = 26;
day1.fahrenheit = 67;

const day2 = new Temperature(24);

const day3 = Temperature.fromFahrenheit(88);
