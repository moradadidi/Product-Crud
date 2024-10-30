// CustomSidebar.jsx
"use client";

import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

function CustomSidebar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="w-64 bg-white shadow-lg p-4">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as="div" icon={HiChartPie}>
            <Link to="/" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Dashboard
            </Link>
          </Sidebar.Item>
          <Sidebar.Item as="div" icon={HiViewBoards}>
            <Link to="/kanban" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Kanban
            </Link>
          </Sidebar.Item>
          <Sidebar.Item as="div" icon={HiInbox}>
            <Link to="/inbox" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Inbox
            </Link>
          </Sidebar.Item>
          <Sidebar.Item as="div" icon={HiUser}>
            <Link to="/users" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Users
            </Link>
          </Sidebar.Item>
          <Sidebar.Item as="div" icon={HiShoppingBag}>
            <Link to="/products" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Products
            </Link>
          </Sidebar.Item>
          <Sidebar.Item as="div" icon={HiArrowSmRight}>
            <Link to="/sign-in" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Sign In
            </Link>
          </Sidebar.Item>
          <Sidebar.Item as="div" icon={HiTable}>
            <Link to="/sign-up" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Sign Up
            </Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item as="div" icon={HiChartPie}>
            <Link to="/upgrade" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Upgrade to Pro
            </Link>
          </Sidebar.Item>
          <Sidebar.Item as="div" icon={HiViewBoards}>
            <Link to="/documentation" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Documentation
            </Link>
          </Sidebar.Item>
          <Sidebar.Item as="div" icon={BiBuoy}>
            <Link to="/help" className="text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 rounded-lg px-4 py-2 block">
              Help
            </Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default CustomSidebar;
