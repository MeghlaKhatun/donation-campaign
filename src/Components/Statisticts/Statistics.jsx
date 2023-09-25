import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react'

const Statistics = () => {

    const [myDonateCard, setMyDonateCard] = useState(0);

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('donation-details'));
        if (localStorageData!== null) {
            setMyDonateCard(localStorageData.length);
        }
    }, [])

    const data = [
        { label: 'My Donation', value: myDonateCard, color: '#00C49F' },
        { label: 'Total Donation', value: 12 - myDonateCard, color: 'red' },
    ];

    const style = {
        margin: { right:10 },
        width:500,
        height: 500
    };

    const TotalCard = 12;

    const getArcLabel = (params) => {
        const percent = params.value / TotalCard;
        return `${(percent * 100).toFixed(1)}%`;
    };


    return (
        <div className='max-w-7xl mx-auto ml-[-80px] md:ml-[140px] lg:ml-[700px]'>
             <PieChart
            series={[
                {
                    outerRadius: 130,
                    data,
                    arcLabel: getArcLabel,
                },
            ]}
            legend={{
                direction:"col",
                position: {
                  vertical: "middle",
                  horizontal: "middle"
                }
              }}
              sx={{
                "--ChartsLegend-rootOffsetX": "0px",
                "--ChartsLegend-rootOffsetY": "200px",
              }}
            {...style}
        />
        
        </div>

       
    )
};

export default Statistics;

