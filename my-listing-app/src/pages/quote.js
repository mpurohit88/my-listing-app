import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap';

import Layout from '../components/layout'
import SEO from '../components/seo'
import './quote.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Quote Page" />
    <div style={{
        display: 'flex',
        alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: '#29cbfb',
				color: 'white',
				padding: 5
    }}>
			<span>
					Quote: 121
			</span>
			<div>
				Ramesh is Working on
				<Button style={{marginLeft: 20}} variant="primary" type="button" >
					Start Work
				</Button>
			</div>
    </div>
		<div style={{
        display: 'flex',
        alignItems: 'center',
				justifyContent: 'space-between',
				padding: 5,
				border: '1px solid #29cbfb'
    }}>
			<span>Effective Date: 12/12/2018</span>
			<span>Quote Type: abc</span>
		</div>
		<div style={{
        display: 'flex',
        alignItems: 'center',
				justifyContent: 'space-between',
				padding: 5
    }}>
			<span>
				Summary: This quote is created for XYZ company on 12/12/2018 for rubber.
			</span>
		</div>
		<div className='task'>
			<div style={{
				display: '-webkit-box'
			}}>
				<div className='circle'>
				</div>
				<label style={{paddingLeft: 20}}>Schedule reminders for customer</label>
			</div>
			<Button variant='primary'>Schedule</Button>
		</div>
		
		<div class="vertical-line"></div> 
		
		<div className='task'>
			<div style={{
				display: '-webkit-box'
			}}>
			<div className='circle'>
				</div>
			<label style={{paddingLeft: 20}}>Send Quote Reminder to Customer</label>
			</div>
			<div>
				<Button variant='primary'>Send Quote Reminder</Button>
				<Button style={{ marginLeft: 20 }} variant='primary'>Done</Button>
			</div>
		</div>
		
		<div class="vertical-line"></div> 

		<div className='task active'>
				<div style={{
				display: '-webkit-box'
			}}>
			<div className='circle1'>
			</div>
			<label style={{paddingLeft: 20}}>Convert Quote into Invoice And Send to Customer</label>
			</div>
			<Button variant='primary'>Convert & Send</Button>
		</div>
		
		<div class="vertical-line"></div> 
		
		<div className='task'>
		<div style={{
				display: '-webkit-box'
			}}>
		<div className='circle1'>
				</div>
			<label style={{paddingLeft: 20}}>Send Payment Reminder</label>
			</div>
			<div>
				<Button variant='primary'>Send Payment Reminder</Button>
				<Button style={{ marginLeft: 20 }} variant='primary'>Done</Button>
			</div>
		</div>
		<div style={{
			marginTop: 40
		}}>
			<Button variant='primary'>Close Quote</Button>
			<Link to="/" style={{marginLeft: 20}}>Go back to the homepage</Link>
		</div>
  </Layout>
)

export default SecondPage
