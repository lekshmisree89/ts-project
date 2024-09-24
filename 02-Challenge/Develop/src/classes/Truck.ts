// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class a
//nd implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {

  private vin: string;
  private color: string;
  private make: string;
  private model: string;
  private year: number;
  private weight: number;
  private topSpeed: number;
  protected wheels: Wheel[];
private towingCapacity: number;

  // Constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the parent class (Vehicle) constructor
    super(vin, color, make, model, year, weight, topSpeed);
  
{
    // Initialize Truck-specific properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Ensure the wheels array has exactly 4 wheels
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleWeight = vehicle.weight;
    const vehicleDescription = `${vehicle.make} ${vehicle.model}`;
  }
    if (vehicleWeight <= this.towingCapacity) {
      console.log(`The truck is towing a ${vehicleDescription}.`);
    } else {
      console.log(`The ${vehicleDescription} is too heavy to be towed.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the parent class's printDetails method
    super.printDetails();

    // Log the details specific to the Truck class
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
}

// Export the Truck class as the default export
export default Truck;
