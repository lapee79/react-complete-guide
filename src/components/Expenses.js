import ExpenseItem from './ExpenseItem';
import Card from './Card';

import './Expenses.css';

const Expenses = ({ expenses = [] }) => {
  return (
    <Card className="expenses">
      {expenses.map(({title, amount, date}) => <ExpenseItem title={title} amount={amount} date={date} />)}
    </Card>
  );
};

export default Expenses;
