interface Props{
    amount:number
}

const FmtPrice = ({amount}:Props) => {
    const FormattedAmount = new Number(amount).toLocaleString("en-US",{
        style:'currency',
        currency:"USA",
        minimumFractionDigits:2
    });
  return <span>{FormattedAmount}</span>;
};

export default FmtPrice;