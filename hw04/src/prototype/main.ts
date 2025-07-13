// TODO: реалізуйте приклад тут
import { UserProfile } from "./UserProfile";

const chief = new UserProfile("Гупало Іван", "finance", {
  canEditUsers: true,
  canApproveBudget: true,
  canAccessInternalTools: true
});

const deputy = chief.clone() as UserProfile;
deputy.username = "Коваль Максим";
deputy.permissions.canEditUsers = false;

console.log("Original:", chief);
console.log("Cloned:", deputy);
