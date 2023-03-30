# Group-15
## Project
### Title:
HVAC AnoML - A HVAC Anomaly Detection System 

### Problem statement:
Perform anomaly detection on time-series data of Internet of Things (IoT) based on Heating, Ventilation and Air Conditioning (HVAC) systems. HVAC systems are crucial in providing appropriate environmental conditions in terms of temperature, humidity, pressure, and flow rate while being energy efficient. With the rapid growth of IoT based HVAC systems it becomes crutial to detect short-term anomalies and long-term anomalies in heating and cooling, and air quality. The detection must be made in real-time/as soon as possible in in Hospitals, Data Centers, BioTech Labs. This becomes more challenging with large amounts of data. 

### Abstract:
To solve this, we are building a system to scalibily ingest HVAC IoT data and perform anomaly detection on it. 
This will cover
1. Ingest large volumes of data and store efficiently 
2. Analyse historical data and build ML models based off of them
3. Perform real-time/ near real time analysis on the incoming streaming data

### Approach:
Our basic approach is that the data from the sensors gets ingested into the cloud via GCP Functions.  The system was tested with bursty high-velocity data like seen on some sensors - the serverless functions were able to autoscaling upto 100 to support high velocity ingestion and scaling down. There are two parts of the system, detection of real-time anomalies and prediction of future breakdowns. For real-time, we use an algorithm that learns the pattern from the data and detects real-time anomaly using Z-Score (with millisecond latency). While for predictions, we used a RNN based model leveraged via Facebook's Prophet software.

## Architecture 

Block Diagram of the two paths
1. Real time-anomaly detection 
2. Analyzing historical data to find pattern and make future predictions 

![Mfinal drawio (2)](https://user-images.githubusercontent.com/98665151/169639158-3864f9eb-09fb-457e-afce-abdea742199f.png)


### Relevant Dataset:
https://ieee-dataport.org/documents/hvac-air-handling-units-one-year-data-medium-large-size-academic-building

### Example program dashboard
<img width="987" alt="Screen Shot 2022-05-18 at 9 23 12 PM" src="https://user-images.githubusercontent.com/32498849/169204220-341282a8-9ad2-42e8-9abd-b618ed69d3aa.png">

### Link to deployed application
https://majestic-syrniki-4d8693.netlify.app/



---

#### **Root cause Analysis** 

Some common issues faced are:

- Unnecessary Maintenance Call 
If the coolant levels are correct, the filters are clean, and there are no other problems, the maintenance call may not have been necessary. This results in unnecessary expense and inconvenience for the homeowner.
- Missing a probable issue
- A leak may develop and/or a component may malfunction and the problem may not be noticed by the homeowner and, therefore, not corrected until the next scheduled tune-up. This could result in ever-increasing utility bills for the homeowner, and it could result in permanent damage to the HVAC system.
- Scalable System 
With the fast growth rate, one needs a system that scales along.

#### **Improvement Plan**

- Timely real-time alerts with reduced false positives
- HVACAnomaly will alert technicians in a timely manner and reduce the unwanted false alerts 
- Run batch jobs every day that performs routine analysis of HVACs. This data will be displayed for Managers with actionable dashboards. 
- Build to scale, current systems use MySql databases with schemas that need to be predefined. HAVCAnomaly will be built ground-up to be a scalable monitoring system.


#### **Solution Statement**

HVACAnomaly is an intelligent alerting system providing actionable dashboards. It is a scalable HVAC monitoring system.

---
