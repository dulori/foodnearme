package com.foodnearme.util;

import java.sql.SQLException;

public class Haversine {
    public static final double R = 6372.8; // In kilometers
    /**
     * 
     * @param lat1 : Latitude of Location 1 
     * @param lon1 : Longitude of Location 1
     * @param lat2 : Latitude of location 2
     * @param lon2 : Longitude of Location 1
     * @return returns the Distance from tow lat and Lons means Location 
     */
    public static double haversine(double lat1, double lon1, double lat2, double lon2) {
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        lat1 = Math.toRadians(lat1);
        lat2 = Math.toRadians(lat2);

        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        double c = 2 * Math.asin(Math.sqrt(a));
        return R * c;
    }
    public static void main(String[] args) throws SQLException {
    	
    	
    	
    	
    }
}