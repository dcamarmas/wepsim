/*
 *  Copyright 2015-2022 Felix Garcia Carballeira, Alejandro Calderon Mateos, Javier Prieto Cepeda, Saul Alonso Monsalve
 *
 *  This file is part of WepSIM.
 *
 *  WepSIM is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  WepSIM is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with WepSIM.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


    i18n.eltos.hw.ja = {

        "Component":                                "コンポーネント",
        "Element":                                  "エレメント",
        "States (In)":                              "州 (In)",
        "States (Out)":                             "州 (Out)",
        "Signals":                                  "セニャレス",
        "It has":                                   "それは持っています",
        "inputs":                                   "入力",
        "outputs":                                  "出力",
        "signals":                                  "信号",

	"EP:CPU_T1:STATES:IN":                      "Input is the value of MBR register",
	"EP:CPU_T1:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T1:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T2:STATES:IN":                      "Input is the value of PC register",
	"EP:CPU_T2:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T2:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T3:STATES:IN":                      "Input is the output of the selector-IR",
	"EP:CPU_T3:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T3:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T4:STATES:IN":                      "Input is the value of RT1 register",
	"EP:CPU_T4:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T4:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T5:STATES:IN":                      "Input is the value of RT2 register",
	"EP:CPU_T5:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T5:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T6:STATES:IN":                      "Input is the ALU output",
	"EP:CPU_T6:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T6:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T7:STATES:IN":                      "Input is the value of RT3 register",
	"EP:CPU_T7:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T7:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T8:STATES:IN":                      "Input is the value of SR register",
	"EP:CPU_T8:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T8:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T9:STATES:IN":                      "Input is the value of the Register File port A output",
	"EP:CPU_T9:STATES:OUT":                     "Output goes to the Internal Bus",
	"EP:CPU_T9:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_T10:STATES:IN":                     "Input is the value of the Register File port B output",
	"EP:CPU_T10:STATES:OUT":                    "Output goes to the Internal Bus",
	"EP:CPU_T10:SIGNALS:CTL":                   "Confirm that input value is copied to the output",
	"EP:CPU_T11:STATES:IN":                     "Input is the microinstruction/ExCode output",
	"EP:CPU_T11:STATES:OUT":                    "Output goes to the Internal Bus",
	"EP:CPU_T11:SIGNALS:CTL":                   "Confirm that input value is copied to the output",
	"EP:CPU_TA:STATES:IN":                      "Input is the MAR register output",
	"EP:CPU_TA:STATES:OUT":                     "Output goes to the Address Bus",
	"EP:CPU_TA:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_TB:STATES:IN":                      "Input is the Byte Selector output",
	"EP:CPU_TB:STATES:OUT":                     "Output goes to the data bus",
	"EP:CPU_TB:SIGNALS:CTL":                    "Confirm that input value is copied to the output",
	"EP:CPU_MUX_A:STATES:MUX_0":                "Input 0 of MUX A, from Register File (A)",
	"EP:CPU_MUX_A:STATES:MUX_1":                "Input 1 of MUX A, from RT1 register",
	"EP:CPU_MUX_A:STATES:MUX_O":                "Output to ALU, operator 0",
	"EP:CPU_MUX_A:SIGNALS:MA":                  "Select the input value to send to the output",
	"EP:CPU_MUX_B:STATES:MUX_0":                "Input 0 of MUX B, from Register File (B)",
	"EP:CPU_MUX_B:STATES:MUX_1":                "Input 1 of MUX B, from RT2 register",
	"EP:CPU_MUX_B:STATES:MUX_2":                "Input 2 of MUX B, value 4",
	"EP:CPU_MUX_B:STATES:MUX_3":                "Input 3 of MUX B, value 1",
	"EP:CPU_MUX_B:STATES:MUX_O":                "Output to ALU, operator 1",
	"EP:CPU_MUX_B:SIGNALS:MB":                  "Select the input value to send to the output",
	"EP:CPU_MUX_1:STATES:MUX_0":                "Input 0 of MUX 1, from Internal Bus",
	"EP:CPU_MUX_1:STATES:MUX_1":                "Input 1 of MUX 1, from Byte Selector",
	"EP:CPU_MUX_1:STATES:MUX_O":                "Output to MBR, from MUX 1",
	"EP:CPU_MUX_1:SIGNALS:M1":                  "Select the input value to send to the output",
	"EP:CPU_MUX_2:STATES:MUX_0":                "Input 0 of MUX 2, from Internal Bus",
	"EP:CPU_MUX_2:STATES:MUX_1":                "Input 1 of MUX 2, PC + 4",
	"EP:CPU_MUX_2:STATES:MUX_O":                "Output to PC",
	"EP:CPU_MUX_2:SIGNALS:M2":                  "Select the input value to send to the output",
	"EP:CPU_MUX_7:STATES:MUX_0":                "Input 0 of MUX 7, from Internal Bus",
	"EP:CPU_MUX_7:STATES:MUX_1":                "Input 1 of MUX 7, from Flag Selector",
	"EP:CPU_MUX_7:STATES:MUX_O":                "Output to register SR",
	"EP:CPU_MUX_7:SIGNALS:M7":                  "Select the input value to send to the output",
	"EP:CU_MUX_A:STATES:MUX_0":                 "Input 0 of MUX A, from microADDR + 1",
	"EP:CU_MUX_A:STATES:MUX_1":                 "Input 1 of MUX A, from co2maddr",
	"EP:CU_MUX_A:STATES:MUX_2":                 "Input 2 of MUX A, from microIR/MADDR",
	"EP:CU_MUX_A:STATES:MUX_3":                 "Input 3 of MUX A, from 0",
	"EP:CU_MUX_A:STATES:MUX_O":                 "Output to microADDR, from MUX A",
	"EP:CU_MUX_A:SIGNALS:A0":                   "mIR/A0",
	"EP:CU_MUX_A:SIGNALS:A1":                   "Output of control unit MUX B",
	"EP:CU_MUX_B:STATES:MUX_0":                 "Input 0 of MUX B, from MUX C",
	"EP:CU_MUX_B:STATES:MUX_1":                 "Input 1 of MUX B, from NOT (MUX C)",
	"EP:CU_MUX_B:STATES:MUX_O":                 "Output to MUX A/A1",
	"EP:CU_MUX_B:SIGNALS:MB":                   "Select the input value to send to the output",
	"EP:CU_MUX_C:STATES:MUX_0":                 "Input  0 of MUX C, from 0",
	"EP:CU_MUX_C:STATES:MUX_1":                 "Input  1 of MUX C, from INT",
	"EP:CU_MUX_C:STATES:MUX_2":                 "Input  2 of MUX C, from IORdy",
	"EP:CU_MUX_C:STATES:MUX_3":                 "Input  3 of MUX C, from MRdy",
	"EP:CU_MUX_C:STATES:MUX_4":                 "Input  4 of MUX C, from SR/U",
	"EP:CU_MUX_C:STATES:MUX_5":                 "Input  5 of MUX C, from SR/I",
	"EP:CU_MUX_C:STATES:MUX_6":                 "Input  6 of MUX C, from SR/Z",
	"EP:CU_MUX_C:STATES:MUX_7":                 "Input  7 of MUX C, from SR/N",
	"EP:CU_MUX_C:STATES:MUX_8":                 "Input  8 of MUX C, from SR/V",
	"EP:CU_MUX_C:STATES:MUX_9":                 "Input  9 of MUX C, from SR/C",
	"EP:CU_MUX_C:STATES:MUX_10":                "Input 10 of MUX C, from InEx",
	"EP:CU_MUX_C:STATES:MUX_O":                 "Output to MUX B",
	"EP:CU_MUX_C:SIGNALS:CTL":                  "Output of control unit MUX C",
	"EP:CU_MUX_RA:STATES:MUX_0":                "Input 0 of MUX MR, from IR[SelA+0...SelA+4]",
	"EP:CU_MUX_RA:STATES:MUX_1":                "Input 1 of MUX MR, from SelA",
	"EP:CU_MUX_RA:STATES:MUX_O":                "Output to RA",
	"EP:CU_MUX_RA:SIGNALS:CTL":                 "Select the input value to send to the output",
	"EP:CU_MUX_RB:STATES:MUX_0":                "Input 0 of MUX MR, from IR[SelB+0...SelB+4]",
	"EP:CU_MUX_RB:STATES:MUX_1":                "Input 1 of MUX MR, from SelB",
	"EP:CU_MUX_RB:STATES:MUX_O":                "Output to RB",
	"EP:CU_MUX_RB:SIGNALS:MR":                  "Select the input value to send to the output",
	"EP:CU_MUX_RC:STATES:MUX_0":                "Input 0 of MUX MR, from IR[SelC+0...SelC+4]",
	"EP:CU_MUX_RC:STATES:MUX_1":                "Input 1 of MUX MR, from SelC",
	"EP:CU_MUX_RC:STATES:MUX_O":                "Output to RC",
	"EP:CU_MUX_RC:SIGNALS:MR":                  "Select the input value to send to the output",
	"EP:CU_MUX_MC:STATES:MUX_0":                "Input 0 of MUX MC, from IR3...IR0",
	"EP:CU_MUX_MC:STATES:MUX_1":                "Input 1 of MUX MC, from SelCop",
	"EP:CU_MUX_MC:STATES:MUX_O":                "Output to COP",
	"EP:CU_MUX_MC:SIGNALS:CTL":                 "Select the input value to send to the output",
	"EP:MAR:STATES:IN":                         "Input is the Internal Bus",
	"EP:MAR:STATES:OUT":                        "Output goes to the Ta tristate",
	"EP:MAR:SIGNALS:C0":                        "Confirm that input is stored",
	"EP:MBR:STATES:IN":                         "Input is the M1 output",
	"EP:MBR:STATES:OUT":                        "Output goes to the T1 tristate",
	"EP:MBR:SIGNALS:C1":                        "Confirm that input is stored",
	"EP:PC:STATES:IN":                          "Input is the M2 output",
	"EP:PC:STATES:OUT":                         "Output goes to the T2 tristate",
	"EP:PC:SIGNALS:CTL":                        "Confirm that input is stored",
	"EP:IR:STATES:IN":                          "Input is the Internal Bus",
	"EP:IR:STATES:OUT":                         "Output goes to the IR selector and the CU",
	"EP:IR:SIGNALS:C3":                         "Confirm that input is stored",
	"EP:RT1:STATES:IN":                         "Input is the Internal Bus",
	"EP:RT1:STATES:OUT":                        "Output goes to the T4 tristate",
	"EP:RT1:SIGNALS:CTL":                       "Confirm that input is stored",
	"EP:RT2:STATES:IN":                         "Input is the Internal Bus",
	"EP:RT2:STATES:OUT":                        "Output goes to the T5 tristate",
	"EP:RT2:SIGNALS:CTL":                       "Confirm that input is stored",
	"EP:RT3:STATES:IN":                         "Input is the output of the ALU",
	"EP:RT3:STATES:OUT":                        "Output goes to the T7 tristate",
	"EP:RT3:SIGNALS:CTL":                       "Confirm that input is stored",
	"EP:SR:STATES:IN":                          "Input is the output of the M7",
	"EP:SR:STATES:OUT":                         "Output goes to the T8 input and the CU",
	"EP:SR:SIGNALS:CTL":                        "Confirm that input is stored",
	"EP:REGISTER_FILE:STATES:A":                "Output of RF to T9 and MA/0",
	"EP:REGISTER_FILE:STATES:B":                "Output of RF to T10 and MB/0",
	"EP:REGISTER_FILE:STATES:C":                "Input to RF from Internal Bus",
	"EP:REGISTER_FILE:SIGNALS:RA":              "Select the register which value is sent to A",
	"EP:REGISTER_FILE:SIGNALS:RB":              "Select the register which value is sent to B",
	"EP:REGISTER_FILE:SIGNALS:RC":              "Select the register where C's value is stored",
	"EP:REGISTER_FILE:SIGNALS:LC":              "Confirm that RC is going to be updated",
	"EP:CPU_ALU:STATES:A":                      "Output from MUX A multiplexor",
	"EP:CPU_ALU:STATES:B":                      "Output from MUX B multiplexor",
	"EP:CPU_ALU:STATES:ALU":                    "Result goes to the input of T6 and RT3",
	"EP:CPU_ALU:STATES:FLAGS":                  "Updated C,V,N,Z flags",
	"EP:CPU_ALU:SIGNALS:COP":                   "Operation code (+, -, *, ...)",
	"EP:SELECT_SR:STATES:MUX_1":                "Input 1 of SELECT-SR, U flag",
	"EP:SELECT_SR:STATES:MUX_2":                "Input 2 of SELECT-SR, I flag",
	"EP:SELECT_SR:STATES:MUX_3":                "Input 3 of SELECT-SR, flags C V N Z",
	"EP:SELECT_SR:STATES:MUX_O":                "Output to MUX 7/1",
	"EP:SELECT_SR:SIGNALS:SELP":                "Select the input value to send to the output",
	"EP:SELECT_IR:STATES:MUX_I":                "Input of SELECT-IR from IR",
	"EP:SELECT_IR:STATES:MUX_O":                "Output to Internal Bus through T3",
	"EP:SELECT_IR:SIGNALS:SE":                  "Sign Extension",
	"EP:SELECT_IR:SIGNALS:SIZE":                "Size",
	"EP:SELECT_IR:SIGNALS:OFFSET":              "Offset",
	"EP:BYTE_SELECTOR:STATES:FROM_MBR":         "Input from MBR register",
	"EP:BYTE_SELECTOR:STATES:FROM_DATA":        "Input from Data Bus",
	"EP:BYTE_SELECTOR:STATES:BE":               "Output to BE",
	"EP:BYTE_SELECTOR:STATES:TO_MBR":           "Output to M1/1",
	"EP:BYTE_SELECTOR:STATES:TO_TD":            "Output to Td/input",
	"EP:BYTE_SELECTOR:SIGNALS:W":               "Write into main memory",
	"EP:BYTE_SELECTOR:SIGNALS:SE":              "Sign Extension",
	"EP:BYTE_SELECTOR:SIGNALS:A1A0":            "A1A0",
	"EP:BYTE_SELECTOR:SIGNALS:BW":              "Number of bytes to pack",
	"EP:MEMORY:STATES:ADDR":                    "Address bus",
	"EP:MEMORY:STATES:DATA":                    "Data bus",
	"EP:MEMORY:STATES:MRDY":                    "Memory ready",
	"EP:MEMORY:SIGNALS:BE":                     "BW+A1A0",
	"EP:MEMORY:SIGNALS:R":                      "Read",
	"EP:MEMORY:SIGNALS:W":                      "Write",
	"EP:IO:STATES:ADDR":                        "Address bus",
	"EP:IO:STATES:DATA":                        "Data bus",
	"EP:IO:SIGNALS:IOR":                        "Read from IO device",
	"EP:IO:SIGNALS:IOW":                        "Write into the IO device",
	"EP:KEYBOARD:STATES:ADDR":                  "Address bus",
	"EP:KEYBOARD:STATES:DATA":                  "Data bus",
	"EP:KEYBOARD:SIGNALS:IOR":                  "Read from keyboard",
	"EP:DISPLAY:STATES:ADDR":                   "Address bus",
	"EP:DISPLAY:STATES:DATA":                   "Data bus",
	"EP:DISPLAY:SIGNALS:IOR":                   "Read from display (disabled)",
	"EP:DISPLAY:SIGNALS:IOW":                   "Write into the display",
	"EP:L3D:STATES:ADDR":                       "Address bus",
	"EP:L3D:STATES:DATA":                       "Data bus",
	"EP:L3D:SIGNALS:IOR":                       "Read from L3D",
	"EP:L3D:SIGNALS:IOW":                       "Write into the L3D",
	"POC:CPU_T1:STATES:IN":                     "Input is the value of MBR register",
	"POC:CPU_T1:STATES:OUT":                    "Output goes to the Internal Bus",
	"POC:CPU_T1:SIGNALS:CTL":                   "Confirm that output is connected to the input",
	"POC:CPU_T2:STATES:IN":                     "Input is the PC register output",
	"POC:CPU_T2:STATES:OUT":                    "Output goes to the Internal Bus",
	"POC:CPU_T2:SIGNALS:CTL":                   "Confirm that output is connected to the input",
	"POC:CPU_T3:STATES:IN":                     "Input is the IR register output selector",
	"POC:CPU_T3:STATES:OUT":                    "Output goes to the Internal Bus",
	"POC:CPU_T3:SIGNALS:CTL":                   "Confirm that output is connected to the input",
	"POC:CPU_T6:STATES:IN":                     "Input is the ALU output",
	"POC:CPU_T6:STATES:OUT":                    "Output goes to the Internal Bus",
	"POC:CPU_T6:SIGNALS:CTL":                   "Confirm that output is connected to the input",
	"POC:CPU_T8:STATES:IN":                     "Input is the SR register output",
	"POC:CPU_T8:STATES:OUT":                    "Output goes to the Internal Bus",
	"POC:CPU_T8:SIGNALS:CTL":                   "Confirm that output is connected to the input",
	"POC:CPU_T9:STATES:IN":                     "Input is the output on port A of the register file",
	"POC:CPU_T9:STATES:OUT":                    "Output goes to the Internal Bus",
	"POC:CPU_T9:SIGNALS:CTL":                   "Confirm that output is connected to the input",
	"POC:CPU_T10:STATES:IN":                    "Input is the output on port B of the register file",
	"POC:CPU_T10:STATES:OUT":                   "Output goes to the Internal Bus",
	"POC:CPU_T10:SIGNALS:CTL":                  "Confirm that output is connected to the input",
	"POC:CPU_T11:STATES:IN":                    "Input is the MIR/ExCode output",
	"POC:CPU_T11:STATES:OUT":                   "Output goes to the Internal Bus",
	"POC:CPU_T11:SIGNALS:CTL":                  "Confirm that output is connected to the input",
	"POC:CPU_TA:STATES:IN":                     "Input is the MAR register output",
	"POC:CPU_TA:STATES:OUT":                    "Output goes to the address bus",
	"POC:CPU_TA:SIGNALS:CTL":                   "Confirm that output is connected to the input",
	"POC:CPU_TB:STATES:IN":                     "Input is the byte selector output",
	"POC:CPU_TB:STATES:OUT":                    "Output goes to the data bus",
	"POC:CPU_TB:SIGNALS:CTL":                   "Confirm that output is connected to the input",
	"POC:CPU_MUX_A:STATES:MUX_0":               "Input 0 of MUX A, from RF/A",
	"POC:CPU_MUX_A:STATES:MUX_1":               "Input 1 of MUX A, from Internal Bus",
	"POC:CPU_MUX_A:STATES:MUX_O":               "Output to ALU/0, from MUX A",
	"POC:CPU_MUX_A:SIGNALS:MA":                 "Select the input value to send to the output",
	"POC:CPU_MUX_B:STATES:MUX_0":               "Input 0 of MUX B, from RF/B",
	"POC:CPU_MUX_B:STATES:MUX_1":               "Input 1 of MUX B, from PC",
	"POC:CPU_MUX_B:STATES:MUX_O":               "Output to ALU/1, from MUX B",
	"POC:CPU_MUX_B:SIGNALS:MB":                 "Select the input value to send to the output",
	"POC:CPU_MUX_1:STATES:MUX_0":               "Input 0 of MUX 1, from Internal Bus",
	"POC:CPU_MUX_1:STATES:MUX_1":               "Input 1 of MUX 1, from data bus",
	"POC:CPU_MUX_1:STATES:MUX_O":               "Output to MBR, from MUX 1",
	"POC:CPU_MUX_1:SIGNALS:M1":                 "Select the input value to send to the output",
	"POC:CPU_MUX_7:STATES:MUX_0":               "Input 0 of MUX 7, from Internal Bus",
	"POC:CPU_MUX_7:STATES:MUX_1":               "Input 1 of MUX 7, from Flag Selector",
	"POC:CPU_MUX_7:STATES:MUX_O":               "Output to SR, from MUX 7",
	"POC:CPU_MUX_7:SIGNALS:M7":                 "Select the input value to send to the output",
	"POC:CU_MUX_A:STATES:MUX_0":                "Input 0 of MUX A, from mADDR + 1",
	"POC:CU_MUX_A:STATES:MUX_1":                "Input 1 of MUX A, from co2maddr",
	"POC:CU_MUX_A:STATES:MUX_2":                "Input 2 of MUX A, from mIR/MADDR",
	"POC:CU_MUX_A:STATES:MUX_3":                "Input 3 of MUX A, from 0",
	"POC:CU_MUX_A:STATES:MUX_O":                "Output to mADDR, from MUX A",
	"POC:CU_MUX_A:SIGNALS:A0":                  "mIR/A0",
	"POC:CU_MUX_A:SIGNALS:A1":                  "Output of control unit MUX B",
	"POC:CU_MUX_B:STATES:MUX_0":                "Input 0 of MUX B, from MUX C",
	"POC:CU_MUX_B:STATES:MUX_1":                "Input 1 of MUX B, from NOT (MUX C)",
	"POC:CU_MUX_B:STATES:MUX_O":                "Output to MUX A/A1, from MUX B",
	"POC:CU_MUX_B:SIGNALS:MB":                  "Select the input value to send to the output",
	"POC:CU_MUX_C:STATES:MUX_0":                "Input  0 of MUX C, from 0",
	"POC:CU_MUX_C:STATES:MUX_1":                "Input  1 of MUX C, from INT",
	"POC:CU_MUX_C:STATES:MUX_2":                "Input  2 of MUX C, from IORdy",
	"POC:CU_MUX_C:STATES:MUX_3":                "Input  3 of MUX C, from MRdy",
	"POC:CU_MUX_C:STATES:MUX_4":                "Input  4 of MUX C, from SR/U",
	"POC:CU_MUX_C:STATES:MUX_5":                "Input  5 of MUX C, from SR/I",
	"POC:CU_MUX_C:STATES:MUX_6":                "Input  6 of MUX C, from SR/Z",
	"POC:CU_MUX_C:STATES:MUX_7":                "Input  7 of MUX C, from SR/N",
	"POC:CU_MUX_C:STATES:MUX_8":                "Input  8 of MUX C, from SR/V",
	"POC:CU_MUX_C:STATES:MUX_9":                "Input  9 of MUX C, from SR/C",
	"POC:CU_MUX_C:STATES:MUX_10":               "Input 10 of MUX C, from InEx",
	"POC:CU_MUX_C:STATES:MUX_O":                "Output to MUX B",
	"POC:CU_MUX_C:SIGNALS:CTL":                 "Output of control unit MUX C",
	"POC:CU_MUX_RA:STATES:MUX_0":               "Input 0 of MUX MR, from IR[SelA+0...SelA+4]",
	"POC:CU_MUX_RA:STATES:MUX_1":               "Input 1 of MUX MR, from SelA",
	"POC:CU_MUX_RA:STATES:MUX_O":               "Output to RA",
	"POC:CU_MUX_RA:SIGNALS:CTL":                "Select the input value to send to the output",
	"POC:CU_MUX_RB:STATES:MUX_0":               "Input 0 of MUX MR, from IR[SelB+0...SelB+4]",
	"POC:CU_MUX_RB:STATES:MUX_1":               "Input 1 of MUX MR, from SelB",
	"POC:CU_MUX_RB:STATES:MUX_O":               "Output to RB",
	"POC:CU_MUX_RB:SIGNALS:MR":                 "Select the input value to send to the output",
	"POC:CU_MUX_RC:STATES:MUX_0":               "Input 0 of MUX MR, from IR[SelC+0...SelC+4]",
	"POC:CU_MUX_RC:STATES:MUX_1":               "Input 1 of MUX MR, from SelC",
	"POC:CU_MUX_RC:STATES:MUX_O":               "Output to RC",
	"POC:CU_MUX_RC:SIGNALS:MR":                 "Select the input value to send to the output",
	"POC:CU_MUX_MC:STATES:MUX_0":               "Input 0 of MUX MC, from IR3...IR0",
	"POC:CU_MUX_MC:STATES:MUX_1":               "Input 1 of MUX MC, from SelCop",
	"POC:CU_MUX_MC:STATES:MUX_O":               "Output to COP",
	"POC:CU_MUX_MC:SIGNALS:CTL":                "Select the input value to send to the output",
	"POC:MAR:STATES:IN":                        "Input is the Internal Bus",
	"POC:MAR:STATES:OUT":                       "Output goes to the Ta tristate",
	"POC:MAR:SIGNALS:C0":                       "Confirm that input is stored",
	"POC:MBR:STATES:IN":                        "Input is the M1 output",
	"POC:MBR:STATES:OUT":                       "Output goes to the T1 tristate",
	"POC:MBR:SIGNALS:C1":                       "Confirm that input is stored",
	"POC:PC:STATES:IN":                         "Input is the internal bus",
	"POC:PC:STATES:OUT":                        "Output goes to the T2 tristate",
	"POC:PC:SIGNALS:CTL":                       "Confirm that input is stored",
	"POC:IR:STATES:IN":                         "Input is the Internal Bus",
	"POC:IR:STATES:OUT":                        "Output goes to the IR selector and the CU",
	"POC:IR:SIGNALS:C3":                        "Confirm that input is stored",
	"POC:RT1:STATES:IN":                        "Input is the Internal Bus",
	"POC:RT1:STATES:OUT":                       "Output goes to the select-rt1",
	"POC:RT1:SIGNALS:CTL":                      "Confirm that input is stored",
	"POC:SR:STATES:IN":                         "Input is the output of the M7",
	"POC:SR:STATES:OUT":                        "Output goes to the T8 input and the CU",
	"POC:SR:SIGNALS:CTL":                       "Confirm that input is stored",
	"POC:REGISTER_FILE:STATES:A":               "Output of RF to  T9 and MA/0",
	"POC:REGISTER_FILE:STATES:B":               "Output of RF to T10 and MB/0",
	"POC:REGISTER_FILE:STATES:C":               "Input to RF from Internal Bus",
	"POC:REGISTER_FILE:SIGNALS:RA":             "Select the register which value is sent to A",
	"POC:REGISTER_FILE:SIGNALS:RB":             "Select the register which value is sent to B",
	"POC:REGISTER_FILE:SIGNALS:RC":             "Select the register where C's value is stored",
	"POC:REGISTER_FILE:SIGNALS:LC":             "Confirm that RC is going to be updated",
	"POC:CPU_ALU:STATES:A":                     "Output from MUX A multiplexor",
	"POC:CPU_ALU:STATES:B":                     "Output from MUX B multiplexor",
	"POC:CPU_ALU:STATES:ALU":                   "Result goes to the input of T6 and RT3",
	"POC:CPU_ALU:STATES:FLAGS":                 "Updated C,V,N,Z flags",
	"POC:CPU_ALU:SIGNALS:COP":                  "Operation code (+, -, *, ...)",
	"POC:SELECT_RT1:STATES:MUX_I":              "Input of SELECT-RT1 from RT1",
	"POC:SELECT_RT1:STATES:MUX_O":              "Output to Internal Bus through T3",
	"POC:SELECT_RT1:SIGNALS:SE":                "Sign Extension",
	"POC:SELECT_RT1:SIGNALS:SIZE":              "Size",
	"POC:SELECT_RT1:SIGNALS:OFFSET":            "Offset",
	"POC:MEMORY:STATES:ADDR":                   "Address bus",
	"POC:MEMORY:STATES:DATA":                   "Data bus",
	"POC:MEMORY:STATES:MRDY":                   "Memory ready",
	"POC:MEMORY:SIGNALS:BW":                    "Bytes Width",
	"POC:MEMORY:SIGNALS:R":                     "Read",
	"POC:MEMORY:SIGNALS:W":                     "Write",
	"POC:IO:STATES:ADDR":                       "Address bus",
	"POC:IO:STATES:DATA":                       "Data bus",
	"POC:IO:SIGNALS:IOR":                       "Read from IO device",
	"POC:IO:SIGNALS:IOW":                       "Write into the IO device",
	"POC:KEYBOARD:STATES:ADDR":                 "Address bus",
	"POC:KEYBOARD:STATES:DATA":                 "Data bus",
	"POC:KEYBOARD:SIGNALS:IOR":                 "Read from keyboard",
	"POC:DISPLAY:STATES:ADDR":                  "Address bus",
	"POC:DISPLAY:STATES:DATA":                  "Data bus",
	"POC:DISPLAY:SIGNALS:IOR":                  "Read from display (disabled)",
	"POC:DISPLAY:SIGNALS:IOW":                  "Write into the display",
	"POC:L3D:STATES:ADDR":                      "Address bus",
	"POC:L3D:STATES:DATA":                      "Data bus",
	"POC:L3D:SIGNALS:IOR":                      "Read from L3D",
	"POC:L3D:SIGNALS:IOW":                      "Write into the L3D",

	"_last_":				    "_last_"

    } ;

