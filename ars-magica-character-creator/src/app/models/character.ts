import {Skill} from './skill'
import { Equipment } from './equipment';
import { VirtueAndFlaw } from './virtueAndFlaw';
export interface Character {
    name: string;
    age: number;
    type: string;
    intelligence: number;
    perception: number;
    strength: number;
    stamina: number;
    presence: number;
    communication: number;
    dexterity: number;
    quickness: number;
    skill: Skill[];
    virtueAndFlaw: VirtueAndFlaw[];
    warping: number;
    confidence: number;
    experiencePoint: number;
    equipment: Equipment[];
    
}