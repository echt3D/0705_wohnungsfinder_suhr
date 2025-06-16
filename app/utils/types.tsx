export interface Apartment {
  title: string;
  reference_number: string;
  object_type: {
    displayName: string;
    key: string;
  };
  object_category: {
    displayName: string;
    key: string;
  };
  move_in_date: string | null;
  floor: string;
  floor_num: number;
  rooms: number;
  area: number;
  balcony_area: number | null;
  garden_sitting_place_area: number | null;
  loggia_area: number | null;
  basement_area: number | null;
  terrace_area: number | null;
  orientation: string | null;
  reduit_area: number | null;
  comment_field: string | null;
  deposit: number | null;
  layout_plan: string;
  pdf_file: string;
  situation_plan: string;
  factsheets: string;
  isometry: string;
  image: string;
  application_pdf: string;
  object_features: Record<string, string>;
  features_numeric: number;
  feature_string: string;
  tender_title: string | null;
  tender_notice: string | null;
  virtual_tour_link: string;
  website_link: string;
  price_unit: string;
  start_date: string;
  end_date: string | null;
  updated_at: string;
  contact_person: {
    first_name: string;
    surname: string;
    email: string;
    phone: string;
  };
  num_applications: number;
  building: {
    building_title: string;
    address: string;
    house_number: string | null;
    house_number_supplement: string | null;
    postal_code: string;
    city: string;
    colony: string | null;
    land_code: string;
    year_of_construction: number | null;
  };
  images: string[];
  appointments: string;
  object_state_text: string;
  object_state: string;
  application_form: string;
  rentalgross_net: number;
  rentalgross: number;
  incidentals: number;
  rentalprice_squaremeter_net: number;
  rentalprice_squaremeter: number;
  capital_share: number | null;
  additional_costs_1: number | null;
  additional_costs_2: number | null;
  incidental_costs_squaremeter: number;
  parking_space_cost: number | null;
  target_group: string | null;
  min_occupancy: number;
  min_adult: number;
  max_adult: number;
  min_child: number;
  max_child: number;
  subsidized: boolean | null;
}

export interface FilterType {
  floor: string[] | [];
  rooms: string[] | [];
  state: string[] | [];
}

export interface Sort {
  method: string;
  direction: string;
}

export interface SortMethod {
  label: string;
  value: string;
}

export interface Content {
  [key: string]: string | Content | SortMethod[];
}
