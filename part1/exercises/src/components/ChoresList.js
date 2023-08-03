import classes from './ChoresList.module.css'

export default function ChoresList () {
   return <div>
      <h3 className = {classes.choresHeading}>Todays Chores</h3>
      <ul>
         <li className = {classes.choresText}>Make grocery list</li>
         <li className = {classes.choresText}>Purchase newest Defiance of the fall book</li>
         <li className = {classes.choresText}>Do laundry</li>
      </ul>
   </div>;
}