import React from "react";
import { Table, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const WebsiteChecklist = () => {
  // Data for the checklist
  const checklistData = [
    { key: "1", section: "Products", item: "WhatsApp", status: "Completed" },
    { key: "2", section: "Products", item: "RCS Service", status: "Completed" },
    { key: "3", section: "Products", item: "Bulk SMS", status: "Completed" },
    { key: "4", section: "Products", item: "Bulk Voice Call", status: "Completed" },
    { key: "5", section: "Solutions", item: "Real Estate", status: "Completed" },
    { key: "6", section: "Solutions", item: "Food & Beverage", status: "Completed" },
    { key: "7", section: "Solutions", item: "Tours & Travels", status: "Completed" },
    { key: "8", section: "Solutions", item: "Retail and E-Commerce", status: "Content Ready, Images Pending" },
    { key: "9", section: "Solutions", item: "Media", status: "Content Ready, Images Pending" },
    { key: "10", section: "Solutions", item: "Government", status: "Content Ready, Images Pending" },
    { key: "11", section: "Solutions", item: "Education", status: "Content Ready, Images Pending" },
    { key: "12", section: "Solutions", item: "Gaming", status: "Completed" },
    { key: "13", section: "Solutions", item: "Healthcare", status: "Completed" },
    { key: "14", section: "Resources", item: "Service", status: "Completed" },
    { key: "15", section: "Resources", item: "FAQ", status: "Completed" },
    { key: "16", section: "Resources", item: "Blogs", status: " Pending" },
    { key: "17", section: "Company", item: "About Us", status: "Completed" },
    { key: "18", section: "Company", item: "Contact", status: "Completed" },
    { key: "19", section: "Company", item: "Career", status: "Completed" },
  ];

  // Ant Design table columns
  const columns = [
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
    },
    {
      title: "DropDown LandingPages",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  // CSV Download Function
  const downloadCSV = () => {
    const csvHeaders = "Section,Item,Status\n";
    const csvRows = checklistData
      .map((row) => `${row.section},${row.item},${row.status}`)
      .join("\n");
    const csvContent = csvHeaders + csvRows;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "website_checklist.csv";
    link.click();
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Website Checklist</h1>
      
      {/* Ant Design Table */}
      <Table 
        dataSource={checklistData} 
        columns={columns} 
        pagination={{ pageSize: 10 }} 
        bordered 
      />

      {/* Download CSV Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={downloadCSV}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Download Checklist as CSV
        </Button>
      </div>
    </div>
  );
};

export default WebsiteChecklist;
