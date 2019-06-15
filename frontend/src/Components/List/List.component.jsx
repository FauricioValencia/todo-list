import React from "react";
import { List, Typography } from "antd";

export default function ListTodo({ data }) {
  return (
    <div>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>{item.title}</Typography.Text>{" "}
            {item.description}
          </List.Item>
        )}
      />
    </div>
  );
}
