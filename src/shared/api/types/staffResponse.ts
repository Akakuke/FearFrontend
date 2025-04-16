import { StaffUser } from "./staffUsers";

export interface StaffResponse {
  owner: StaffUser[];
  tech_admin: StaffUser[];
  staff_admin: StaffUser[];
  admin_moderator: StaffUser[];
  admin_control: StaffUser[];
  admin_support: StaffUser[];
  admin_eventsmod: StaffUser[];
  admin_closemod: StaffUser[];
  admin_broadcaster: StaffUser[];
  admin_creative: StaffUser[];
  admin_contentmaker: StaffUser[];
  admin_clanmod: StaffUser[];
  admin_helper: StaffUser[];
  developer: StaffUser[];

}