import React, { useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddres } from '../utils/shortenAddress';


const TransactionCard = ({ addressFrom, timestamp, message, amount, url}) =>{

    return (
        <div className="bg-[#5517a0] m-4 flex flex-1 
        2xl:min-w-[430px] 
        2xl:max-w-[500px]
        sm:min-w-[270px] 
        sm:max-w-[300px] flex-col p-2 rounded-xl hover:shadow-2xl">
        <div className="flex flex-col items-center w-full mt-1">
            <div className="w-full mb-5 p-2">
            <p className='text-white text-base text-center'>Amount: {amount} ETH</p>
                <a href={`https://ropstan.etherscan.io/address/${addressFrom}`} target="_blank" rel='noopener noreferer '>
                    <p className='text-white text-base text-center '>From: {shortenAddres(addressFrom)}</p>
                </a>
                {message && (
                    <>
                        <p className='text-white text-base text-center'>message: {message}</p>
                    </>
                )}
            </div>
                <div className="bg-white p-2 px-2 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className='text-[#000000] font-bold'>{timestamp}</p>
                </div>
        </div>
        </div>
    )
}

const Transactions = () =>{
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
            {currentAccount? (
                <h3 className='text-white text-3xl text-center my-2 '>Latest Donations</h3>
            ) : (
                <h3 className='text-white text-3xl text-center my-2 '>Connect your account to see the latest donations </h3>
            )}
            <div className="flex flex-wrap justify-center items-center mt-10">
                {transactions.reverse().map((transaction, i) => (
                    <TransactionCard key={i} {...transaction}/>
                ))}
            </div>
            </div>
           
        </div>
    );
}

export default Transactions;
