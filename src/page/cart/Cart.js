import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";
import { FaTrashAlt } from 'react-icons/fa';
