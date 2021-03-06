// import React from 'react'
// import {
//   CWidgetDropdown,
//   CRow,
//   CCol,
//   CDropdown,
//   CDropdownMenu,
//   CDropdownItem,
//   CDropdownToggle
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import ChartLineSimple from '../charts/ChartLineSimple'
// import ChartBarSimple from '../charts/ChartBarSimple';​const WidgetsDropdown = () => {
//   // render
//   return (
//     <CRow>
//       <CCol sm="6" lg="3">
//         <CWidgetDropdown
//           color="gradient-primary"
//           text="View"
//           header="+24K"
//           style={{height: '180px'}}
//           // footerSlot={
//             // <ChartLineSimple
//             //   pointed
//             //   className="c-chart-wrapper mt-3 mx-3"
            
//             //   dataPoints={[65, 59, 84, 84, 51, 55, 40]}
//               // pointHoverBackgroundColor="primary"
//               // label="View"
//               // labels="months"
//             // />
//           // }
//         >
//           <CDropdown>
//             <CDropdownToggle color="transparent" style={{height:"240px"}}>
//               </CDropdownToggle>
//             +35K
//             <CDropdownMenu className="pt-0" placement="bottom-end">
//               <CDropdownItem>Action</CDropdownItem>
//               <CDropdownItem>Another action</CDropdownItem>
//               <CDropdownItem>Something else here...</CDropdownItem>
//               <CDropdownItem disabled>Disabled action</CDropdownItem>
//             </CDropdownMenu>
           
//           </CDropdown>
//           <CIcon name="cil-layers"/>
//         </CWidgetDropdown>
        
//       </CCol>
// ​
//       <CCol sm="6" lg="3">
//         <CWidgetDropdown
//           color="gradient-info"
//           header="+55K"
//           text="Rated This App"
//           // footerSlot={
//           //   <ChartLineSimple
//           //     pointed
//           //     className="mt-3 mx-3"
//               // style={{height: '160px'}}
//               style={{height: '180px'}}
// ​
//           //     dataPoints={[1, 18, 9, 17, 34, 22, 11]}
//           //     pointHoverBackgroundColor="info"
//           //     options={{ elements: { line: { tension: 0.00001 }}}}
//           //     label="Members"
//           //     labels="months"
//           //   />
//           // }
//         >
//           <CDropdown>
     
              
//               <CDropdownToggle color="transparent" style={{height:"240px"}} >
              
//             </CDropdownToggle>
//             +50K
//             <CDropdownMenu className="pt-0" placement="bottom-end">
//               <CDropdownItem>Action</CDropdownItem>
//               <CDropdownItem>Another action</CDropdownItem>
//               <CDropdownItem>Something else here...</CDropdownItem>
//               <CDropdownItem disabled>Disabled action</CDropdownItem>
//             </CDropdownMenu>
//           </CDropdown>
//           <CIcon name="cil-star"/>
//         </CWidgetDropdown>
//       </CCol>
// ​
//       <CCol sm="6" lg="3">
//         <CWidgetDropdown
//           color="gradient-warning"
//           header="+1M"
//           text="Downloaded"
//           // footerSlot={
//           //   <ChartLineSimple
//           //     className="mt-3"
//               // style={{height: '160px'}}
//               style={{height: '180px'}}
// ​
//               // backgroundColor="rgba(255,255,255,.2)"
//           //     dataPoints={[78, 81, 80, 45, 34, 12, 40]}
//           //     options={{ elements: { line: { borderWidth: 2.5 }}}}
//           //     pointHoverBackgroundColor="warning"
//           //     label="Members"
//           //     labels="months"
//           //   />
//           // }
//         >
//           <CDropdown>
//             <CDropdownToggle color="transparent" style={{height:"240px"}}>
             
//             </CDropdownToggle>
//             +80k
//             <CDropdownMenu className="pt-0" placement="bottom-end">
//               <CDropdownItem>Action</CDropdownItem>
//               <CDropdownItem>Another action</CDropdownItem>
//               <CDropdownItem>Something else here...</CDropdownItem>
//               <CDropdownItem disabled>Disabled action</CDropdownItem>
//             </CDropdownMenu>
//           </CDropdown>
//           <CIcon name="cil-arrow-circle-bottom"/>
//         </CWidgetDropdown>
//       </CCol>
// ​
//       <CCol sm="6" lg="3">
//         <CWidgetDropdown
//           color="gradient-danger"
//           header="+2M"
//           text="VISITORS"
//           // footerSlot={
//           //   <ChartBarSimple
//           //     className="mt-3 mx-3"
//               // style={{height: '160px'}}
//               style={{height: '180px'}}
// ​
//               // backgroundColor="rgb(250, 152, 152)"
//           //     label="Members"
//           //     labels="months"
//           //   />
//           // }
//         >
//           <CDropdown>
//             <CDropdownToggle caret className="text-white" color="transparent" style={{height:"240px"}}>
//               {/* <CIcon name="cil-settings"/> */}
//             </CDropdownToggle>
//             +80k
//             <CDropdownMenu className="pt-0" placement="bottom-end">
//               <CDropdownItem>Action</CDropdownItem>
//               <CDropdownItem>Another action</CDropdownItem>
//               <CDropdownItem>Something else here...</CDropdownItem>
//               <CDropdownItem disabled>Disabled action</CDropdownItem>
//             </CDropdownMenu>
//           </CDropdown>
//           <CIcon name="cil-user"/>
//         </CWidgetDropdown>
//       </CCol>
//     </CRow>
//   )
// }
// ​
// export default WidgetsDropdown



import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="9.823"
          text="Members online"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="9.823"
          text="Members online"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="9.823"
          text="Members online"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="9.823"
          text="Members online"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
