import React from 'react';
import {ScrollView, View} from 'react-native';
import {ReciptPart} from '../../../components';
import NavHeader from '../../../components/common/NavHeader';
import Styles from './Styles';

const data = [
	{
		id: 1,
		headingText: 'Apollo Hospital',
		patientName: 'Mukesh Guthka',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 2,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 3,
		headingText: 'Apollo Hospital',
		patientName: 'Babuji Bidi',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 4,
		headingText: 'Apollo Hospital',
		patientName: 'Ramu Kaka',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 5,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 6,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 7,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 8,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 9,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 10,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 11,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 12,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 13,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 14,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 15,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
	{
		id: 16,
		headingText: 'Apollo Hospital',
		patientName: 'Babu Rao',
		rmpName: 'Dr. Rajesh',
		transactionId: '123456789123',
		transactionDate: '12/02/2023',
		ammount: '12,500',
	},
];

const PaymentHistory = () => {
	return (
		<View>
			<NavHeader headerName={'Payment History'} />
			<ScrollView style={Styles.container}>
				{data.map((item) => {
					return (
						<ReciptPart
							key={item.id}
							headingText={item.headingText}
							patientName={item.patientName}
							rmpName={item.rmpName}
							transactionId={item.transactionId}
							transactionDate={item.transactionDate}
							ammount={item.ammount}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default PaymentHistory;
