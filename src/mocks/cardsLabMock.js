import iconProjectLabPath from '../images/icon_project_lab.svg'
import iconBraintLabPath from '../images/icon_brain_lab.svg'
import iconMicroLabPath from '../images/icon_micro_lab.svg'
import iconRobotLabPath from '../images/icon_robot_lab.svg'
import backProjectPath from '../images/labProject.png';
import backDataPath from '../images/lab_Data.png';
import backMachinePath from '../images/lab_Machinelearning.png';
import backRobotPath from '../images/labRobot.png';


export const cardsLabMock = [
    {
        'id': '1',
        'title': 'Анализ социальных данных',
        'icon': iconProjectLabPath,
        'backImage': backProjectPath
    },
    {
        'id': '2',
        'title': 'Инфраструктура больших данных',
        'icon': iconBraintLabPath,
        'backImage': backRobotPath
    },
    {
        'id': '3',
        'title': 'Облачные вычисления',
        'icon': iconMicroLabPath,
        'backImage': backDataPath
    },
    {
        'id': '4',
        'title': 'QA cистемы',
        'icon': iconRobotLabPath,
        'backImage': backMachinePath
    },
]