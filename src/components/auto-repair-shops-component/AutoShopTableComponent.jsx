import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Axios from 'axios';
import Box from '@material-ui/core/Box';
import { Col, Row } from 'react-bootstrap';
import AutoShopService from '../../services/AutoShopService'
import AddAutoShopModalComponent from './AddAutoShopModalComponent';
import ExportCSV from './ExportAutoShopCSV';
import SearchAutoShopDropdown from '../dropdown-components/SearchAutoShopDropdown';
import AutoShopOptionsRow from '../options-row-component/AutoShopOptionsRow';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function AutoShopTableComponent() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Auto Shop ID', field: 'autoShopId', hidden: true },
      { title: 'Name of Auto Shop', field: 'autoShopName' },
      { title: 'Address', field: 'address' },
      { title: 'City', field: 'city' },
      { title: 'State', field: 'state' },
      { title: 'zip', field: 'zip' }
    ],
  });

  const [autoShop, setAutoShop] = useState({
    data: [
      {
        autoShopId: 0,
        autoShopName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      }
    ]
  });

  const [fileName] = useState("Auto_Shops");

  useEffect(() => {
    AutoShopService.getAllAutoShopsInfo().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          autoShopId: e1.autoShopId,
          autoShopName: e1.autoShopName,
          address: e1.address,
          city: e1.city,
          state: e1.state,
          zip: e1.zip,
        });
      });
      setAutoShop({ data: data });
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    AutoShopService.addAutoShop(newData)
      .then(res => {
        let dataToAdd = [...autoShop.data];
        dataToAdd.push(newData);
        setAutoShop(dataToAdd);
        resolve();
        window.location.reload();
      });
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    Axios.put(`http://localhost:8080/app/auto-repair-shops/repair-shop/${oldData.auto_shop_id}`)
      .then(res => {
        const dataUpdate = [...autoShop.data];
        const index = oldData.tabledata.auto_shop_id;
        dataUpdate[index] = newData;
        setAutoShop([...dataUpdate]);
        resolve();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowDelete = (oldData, resolve) => {
    Axios.delete(`http://localhost:8080/app/auto-repair-shops/repair-shop/${oldData.autoShopId}`)
      .then(res => {
        const dataDelete = [...autoShop.data];
        const index = oldData.tabledata.autoShopId;
        dataDelete.splice(index, 1);
        setAutoShop([...dataDelete]);
        resolve();
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  return (
    <div>
      <Row>
        <Col md={4}>
          <AddAutoShopModalComponent />
        </Col>
        <Col md={4}>
          <SearchAutoShopDropdown />
        </Col>
        <Col md={1}>

        </Col>
        <Col md={2}>
          <ExportCSV csvData={autoShop.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
      <Box border={3} borderRadius={16}>
        <MaterialTable
          title="Auto Shop"
          columns={state.columns}
          data={autoShop.data}
          icons={tableIcons}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                handleRowAdd(newData, resolve)
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                handleRowDelete(oldData, resolve)
              }),
          }}
        />
      </Box>
    </div>
  );
}